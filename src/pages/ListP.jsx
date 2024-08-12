import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import ListC2 from '../components/parts/ListC2'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import { useEffect } from 'react';
// This page contain information about pacient

const ListP = () => {

  const {DiagID, Diagnostics, getDiag} = useTasks();

  const {id} = useParams();
  
  if (DiagID !== id) {
    useEffect (() => {
      try {
        getDiag(id);
      } catch (error) {
        console.log(error);
      }
    }, [id]);
  }

  const DatosNS = [
    { toNS: '/ListH', TextNS: 'Inicio', srcNS: '/img/home.svg'},
    { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg', backgroundColor: '#F2F2F2'},
    { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg'},
  ]

  if (Diagnostics.length === 0) {
    return     <>
    <NavbarS NS={DatosNS}/>
    <TopbarS Datos={500} Search={"Nombre_Diagnostico"}/>
    <Div1>
      <ListC1 InfSeC1={"Diagnostico"}></ListC1>
      <PI>Cargando...</PI>
    </Div1>
  </>
  }

  if (Diagnostics.response && Diagnostics.response.status === 500) {
    return (
      <>
        <NavbarS NS={DatosNS} />
        <TopbarS Datos={Diagnostics.response.status} Search={"Nombre_Diagnostico"} />
        <Div1>
          <ListC1 InfSeC1={"Diagnostico"} />
          <PI>No se encontraron resultados</PI>
        </Div1>
      </>
    );
  }

  return (
    <>
      <NavbarS NS={DatosNS}/>
      <TopbarS Datos={Diagnostics} Search={"Nombre_Diagnostico"} pageType="ListP"/>
      <Div1>
        <ListC1 InfSeC1={"Diagnostico"}></ListC1>
        {Diagnostics.map((diagnostic, index) => (
        <React.Fragment key={index}>
          <Line />
          <ListC2
          data={diagnostic} 
          idd={id + '-'+ diagnostic.ID_Diagnostico_Paciente}
          Datos={''}
          LinkC2={{pathname: `/ListP/${id}/${diagnostic.ID_Diagnostico_Paciente}`}}
          />
        </React.Fragment>
        ))}
      </Div1>
    </>
  )
}

const Div1 = styled.div`
    width: calc(100vw - 256px);
    height: 100%;
    margin-left: 256px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
    }
`

const Line = styled.div`
    background-color: #E6E6E6;
    width: 90%;
    height: 2px;
`;

const PI = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    margin: 24px;
    color: #828282;
`


export default ListP