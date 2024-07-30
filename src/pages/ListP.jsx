import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import ListC2 from '../components/parts/ListC2'
import styled, {keyframes} from 'styled-components'
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
      } catch (error) {
        console.log(error);
      }
    }, [id]);
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
      <Loader>Cargando...</Loader>
    </Div1>
  </>
  }

  if (Diagnostics.response && Diagnostics.response.status === 500) {
    return (
      <>
        <NavbarS NS={DatosNS} />
        <TopbarS Datos={Diagnostics} Search={"Nombre_Diagnostico"} />
        <Div1>
          <ListC1 InfSeC1={"Diagnostico"} />
          <Loader>No se encontraron resultados</Loader>
        </Div1>
      </>
    );
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

const matrix = keyframes`
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%;
  }
  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%;
  }
`;

const Loader = styled.div`
  width: 45px;
  height: 40px;
  background: linear-gradient(#0000 calc(1*100%/6),#fff 0 calc(3*100%/6),#0000 0),
              linear-gradient(#0000 calc(2*100%/6),#fff 0 calc(4*100%/6),#0000 0),
              linear-gradient(#0000 calc(3*100%/6),#fff 0 calc(5*100%/6),#0000 0);
  background-size: 10px 400%;
  background-repeat: no-repeat;
  animation: ${matrix} 1s infinite linear;
`;


export default ListP