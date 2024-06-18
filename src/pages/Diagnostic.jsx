import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import styled from 'styled-components'
import Inp2 from '../components/parts/Inp2'
import { useParams } from 'react-router-dom'

const Diagnostic = () => {
    const {id} = useParams();

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]

    const Inputs = [
        { TextIn2: 'Peso', srcNS: '/img/create.svg'},
        { TextIn2: 'Estatura', srcNS: '/img/create.svg'},   
        { TextIn2: 'Temperatura', srcNS: '/img/create.svg'},   
    ]

  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR />
        <Div1>
            {/* Map of items */}
            {Inputs.map((Input, index) => (
                <Inp2 
                key={index} 
                TextIn2={Input.TextIn2} 
                srcNS={Input.srcNS} 
                showButton={index === Inputs.length - 1} 
                x={index === Inputs.length - 1} 
                />
            ))}        
        </Div1>
    </>
  )
}

export default Diagnostic

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    display: flex;
    flex-direction: column;
`

const Div2 = styled.div`
    margin-top: 15px;
    text-align: left;
    margin-left: 30px;
`
