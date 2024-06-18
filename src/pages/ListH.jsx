import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import ListC2 from '../components/parts/ListC2'
import Pacientes from '/Json/Pacientes.json';

const Div1 = styled.div`
    width: calc(100vw - 256px);
    height: 100vh;
    margin-left: 256px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Line = styled.div`
    background-color: #E6E6E6;
    width: 90%;
    height: 2px;
`;

const ListH = () => {

  const DatosNS = [
    { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg', backgroundColor: '#F2F2F2'},
    { toNS: '/CreateP', TextNS: 'Crear', srcNS: '/img/create.svg'},
]


  return (
    <>
      <NavbarS NS={DatosNS}/>
      <TopbarS  Datos={Pacientes} Search={"NombreC2"}/>
      <Div1>
        <ListC1 ListC1={"Datos"} InfSeC1={"Nombre"}></ListC1>
        {/* Mapea unicamente los componentes line y ListC2 */}
        {Pacientes.map((paciente, index) => (
          <React.Fragment key={index}>
            <Line />
            <ListC2 
              paciente={paciente}

              IDC2={paciente.IDC2} 
              NombreC2={paciente.NombreC2} 
              DatosC2={paciente.DatosC2}
              LinkC2={{pathname: `/ListP/${paciente.IDC2}`}}
              LinkC22={{pathname: `/ListP/${paciente.IDC2}/Res_2`}}
            />
          </React.Fragment>
        ))}
      </Div1>
    </>
  )
}

export default ListH