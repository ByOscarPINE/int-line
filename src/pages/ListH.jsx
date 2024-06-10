import React from 'react'
import NavbarS from '../components/NavbarS'
import TopbarS from '../components/TopbarS'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import ListC2 from '../components/parts/ListC2'

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
  const Pacientes = [
    { IDC2: 'Test1', NombreC2: 'Oscar', LinkC2: 'valor2' },
    { IDC2: 'Test2', NombreC2: 'Carlos', otraProp2: 'valor6' },
    { Imref: './img/InstaIcon.png', otraProp: 'valor3', otraProp2: 'valor4' },
  ];


  return (
    <>
    <NavbarS/>
    <TopbarS/>
    <Div1>
      <ListC1></ListC1>
      {Pacientes.map((paciente, index) => (
        <React.Fragment key={index}>
        <Line />
        <ListC2 paciente={paciente} IDC2={paciente.IDC2} NombreC2={paciente.NombreC2}/>
      </React.Fragment>
      ))}
    </Div1>
    </>
  )
}

export default ListH