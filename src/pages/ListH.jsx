import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import ListC2 from '../components/parts/ListC2'
import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext'

const ListH = () => {

  const {Pacientes, loadPacientes} = useTasks();

  if (Pacientes.length === 0) {
    useEffect (() => {
      try {
        loadPacientes();
      } catch (error) {
        console.log(error);
      }
    }, []);
  }

  return (
    <>
      <NavbarS NS={DatosNS}/>
      <TopbarS  Datos={Pacientes} Search={"apellido_paterno"} pageType="ListH"/>
      <Div1>
        <ListC1 ListC1={"Datos"} InfSeC1={"Nombre"}></ListC1>
        {/* Mapea unicamente los componentes line y ListC2 */}
        {Pacientes.map((paciente, index) => (
          <React.Fragment key={index}>
            <Line />
            <ListC2 
              data={paciente}
              Datos={'Datos'}
              idd={paciente.id_paciente}
              LinkC2={{pathname: `/ListP/${paciente.id_paciente}`}}
              LinkC22={{pathname: `/ListH/${paciente.id_paciente}/Res_2`}}
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
      margin: 0 auto;
      width: 100vw;
    }
`

const Line = styled.div`
    background-color: #E6E6E6;
    width: 90%;
    height: 2px;
`;

const DatosNS = [
  { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg', backgroundColor: '#F2F2F2'},
  { toNS: '/CreateP', TextNS: 'Crear', srcNS: '/img/create.svg'},
]

export default ListH