import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import styled from 'styled-components'
import Inp2 from '../components/parts/Inp2'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Diagnostic = () => {
    const {id} = useParams();

    const Inputs = [
        { id: 'peso', TextIn2: 'Peso'},
        { id: 'estatura', TextIn2: 'Estatura'},
        { id: 'temperatura', TextIn2: 'Temperatura'},
      ];

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]

    const [inputs, setInputs] = useState(
        Inputs.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {})
      );

    const handleInputChange = (event, id) => {
        const { value } = event.target;
        setInputs(prev => ({ ...prev, [id]: value }));
      };

  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR />
        <Div1>
            {/* Map of items */}
            {Inputs.map((Input, index, Inputs) => (
                <Inp2
                key={Input.id} 
                TextIn2={Input.TextIn2} 
                srcNS={Input.srcNS}
                value={inputs[Input.id]}
                onChange={event => handleInputChange(event, Input.id)}
                showButton={index === Inputs.length - 1} 
                x={index === Inputs.length - 1} 
                inputs={inputs}
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