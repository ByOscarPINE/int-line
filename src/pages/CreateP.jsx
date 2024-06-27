import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import Inp1 from '../components/parts/Inp1'
import styled from 'styled-components'
import { useState } from 'react'
import ButtonLD from '../components/buttons/ButtonLD'
import { useTasks } from '../context/TaskContext'

const CreateP = () => {

    const {registrarPacc} = useTasks();

    const [inputs, setInputs] = useState(
        Inputs.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {})
      );

      const handleInputChange = (event, id) => {
        const { value } = event.target;
        setInputs(prev => ({ ...prev, [id]: value }));
      };
  
    const handleButtonClick = () => {
      console.log(inputs);
      registrarPacc(inputs)
    };

  return (
    <>
        <NavbarS NS={DatosNS} />
        <TopbarR TopRL={"/ListH"} />
        <Div1>
            {/* Map of items */}
            {Inputs.map((Input) => (
                <Inp1 
                key={Input.id} 

                TextIn1={Input.TextIn1} 
                srcNS={Input.srcNS}

                showButton={Input === Inputs.length - 1}
                value={inputs[Input.id]}
                onChange={event => handleInputChange(event, Input.id)}
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

const Inputs = [
  { id: 'nombres', TextIn1: 'Nombre(s)'},
  { id: 'apellido_p', TextIn1: 'Apellido Paterno'},
  { id: 'apellido_m', TextIn1: 'Apellido Materno'},
  { id: 'fecha_n', TextIn1: 'Fecha de Nacimiento'},
  { id: 'estado_n', TextIn1: 'Estado de Nacimiento'},
  { id: 'municipio_n', TextIn1: 'Municipio de Nacimiento'},
  { id: 'localidad', TextIn1: 'Localidad'},
  { id: 'agencia', TextIn1: 'Agencia'},
  { id: 'barrio', TextIn1: 'Barrio'},
];

const DatosNS = [
    { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
    { toNS: '/CreateP', TextNS: 'Crear', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
]

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


export default CreateP