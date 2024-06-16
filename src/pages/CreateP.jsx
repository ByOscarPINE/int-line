import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import Inp1 from '../components/parts/Inp1'
import styled from 'styled-components'
import { useState } from 'react'
import ButtonLD from '../components/buttons/ButtonLD'

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Div2 = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`


const CreateP = () => {

    const [inputs, setInputs] = useState(Inputs.map(() => "")); // Inicializa el estado con un array de strings vacíos

    const handleInputChange = (event, index) => {
      const newInputs = [...inputs];
      newInputs[index] = event.target.value;
      setInputs(newInputs);
    };
  
    const handleButtonClick = () => {
      console.log(inputs);
    };


  return (
    <>
        <NavbarS NS={DatosNS} />
        <TopbarR TopRL={"/ListH"} />
        <Div1>
            {/* Map of items */}
            {Inputs.map((Input, index) => (
                <Inp1 
                key={index} 

                TextIn1={Input.TextIn1} 
                srcNS={Input.srcNS}

                showButton={index === Inputs.length - 1}
                value={inputs[index]} 
                onChange={event => handleInputChange(event, index)}
                />
            ))}
            <Div2>
                <ButtonLD 
                textLD={"Guardar Paciente"} 
                onClick={handleButtonClick}
                />
            </Div2>
        </Div1>
    </>
  )
}

const DatosNS = [
    { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
    { toNS: '/CreateP', TextNS: 'Crear', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
]

const Inputs = [
    { TextIn1: 'Nombre(s)', srcNS: '/img/home.svg'},
    { TextIn1: 'Apellido Paterno', srcNS: '/img/search.svg'},
    { TextIn1: 'Apellido Materno', srcNS: '/img/create.svg'},
    { TextIn1: 'Fecha de nacimiento', srcNS: '/img/create.svg'},
    { TextIn1: 'Estado de nacimiento', srcNS: '/img/create.svg'},
    { TextIn1: 'Municipio de nacimiento', srcNS: '/img/create.svg'},
    { TextIn1: 'Localidad/Agencia/Barrio', srcNS: '/img/create.svg'},
]

export default CreateP