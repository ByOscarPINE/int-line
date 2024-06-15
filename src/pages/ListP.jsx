import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import ListC2 from '../components/parts/ListC2'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
// This page contain information about pacient

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


const ListP = () => {

  const Pacientes = [
    { IDC2P: '1', NomSer: 'toz', LinkC2: '/Res_1', DatosC2: 'Datos1', Fecha: '12/12/2021' },
  ];

  const BottInf = [
    { Link: '/Res_1', Text: 'Home', srcNS: '/img/home.svg'},
    { Link: '/ListP', Text: 'Buscar', srcNS: '/img/search.svg'},
    { Link: '/ListP', Text: 'Diagnosticar', srcNS: '/img/create.svg'},
]

  return (
    <>
      <NavbarS Text={BottInf} srcNS={BottInf}/>
      <TopbarS/>
      <Div1>
        <ListC1 InfSeC1={"Diagnostico"}></ListC1>
        {Pacientes.map((paciente, index) => (
        <React.Fragment key={index}>
          <Line />
          <ListC2 paciente={paciente} IDC2P={paciente.IDC2P} NomSer={paciente.NomSer} LinkC2={paciente.LinkC2} Fecha={paciente.Fecha}/>
        </React.Fragment>
        ))}
      </Div1>
    </>
  )
}

export default ListP