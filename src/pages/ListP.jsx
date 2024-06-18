import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarS from '../components/parts/TopbarS'
import ListC2 from '../components/parts/ListC2'
import styled from 'styled-components'
import ListC1 from '../components/parts/ListC1'
import Registro from '/Json/Registro.json';
import { useParams } from 'react-router-dom'

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

  const {id} = useParams();

  const data = id;

  console.log(data);

  const DatosNS = [
    { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
    { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg', backgroundColor: '#F2F2F2'},
    { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg'},
]

  return (
    <>
      <NavbarS NS={DatosNS}/>
      <TopbarS Datos={Registro} Search={"NomSer"} />
      <Div1>
        <ListC1 InfSeC1={"Diagnostico"}></ListC1>
        {Registro.map((paciente, index) => (
        <React.Fragment key={index}>
          <Line />
          <ListC2
          paciente={paciente} 
          IDC2P={paciente.IDC2P} 
          NomSer={paciente.NomSer} 
          LinkC2={paciente.IDC2P}
          Fecha={paciente.Fecha}

          />
        </React.Fragment>
        ))}
      </Div1>
    </>
  )
}

export default ListP