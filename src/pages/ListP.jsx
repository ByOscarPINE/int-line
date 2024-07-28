import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import ListC2 from '../components/parts/ListC2'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import Registro from '/Json/Registro.json';
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
        console.log('Loading Diagnostic');
      } catch (error) {
        console.log(error);
      }
    }, []);
  }

  const DatosNS = [
    { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
    { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg', backgroundColor: '#F2F2F2'},
    { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg'},
]
  if (Diagnostics.length === 0) {
    return     <>
    <NavbarS NS={DatosNS}/>
    <TopbarS Datos={Diagnostics} Search={"Nombre_Diagnostico"}/>
    <Div1>
      <ListC1 InfSeC1={"Diagnostico"}></ListC1>
      <p>Cargando...</p>
    </Div1>
  </>
  }

  return (
    <>
      <NavbarS NS={DatosNS}/>
      <TopbarS Datos={Diagnostics} Search={"Nombre_Diagnostico"}/>
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

export default ListP