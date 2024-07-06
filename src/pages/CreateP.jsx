import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import Inp1 from '../components/parts/Inp1'
import styled from 'styled-components'
import { useState } from 'react'
import ButtonLD from '../components/buttons/ButtonLD'
import { useTasks } from '../context/TaskContext'
import { useForm } from 'react-hook-form'


const CreateP = () => {

    const {registrarPacc, validarLetrasYEspacios} = useTasks();
    const { register, handleSubmit } = useForm();
    
      // registrarPacc(inputs)
    //   const [inputs, setInputs] = useState(
    //     Inputs.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {})
    //   );

    //   const handleInputChange = (event, id) => {
    //     const {value} = event.target;
    //     const input = Inputs.find(input => input.id === id)

    //     if (input&& input.validacion(value)){
    //       setInputs(prev => ({ ...prev, [id]: value }));
    //     } else {
    //       // Maneja el caso de error, por ejemplo, mostrando un mensaje de error
    //       console.log(`Validación fallida para ${id}`);
    //     }
    //   };
  
    // const handleButtonClick = () => {
    //   console.log(inputs);
    //   registrarPacc(inputs)
    // };

    // const validarYBorrarUltimoNumero = (event) => {
    //   const valorActual = event.target.value;
    //   const ultimoCaracter = valorActual.slice(-1); // Obtener el último carácter
    //   if (/[0-9-=/.,]/.test(ultimoCaracter)) { // Verificar si el último carácter es un número
    //     event.target.value = valorActual.slice(0, -1); // Eliminar el último carácter si es un número
    //   }
    // };

  return (
    <>
        <NavbarS NS={DatosNS} />
        <TopbarR TopRL={"/ListH"} TextN={"Crear paciente"}/>
        <Div1>
          <Form onSubmit={handleSubmit(values => {
            console.log(values)
            registrarPacc(values)
          })}>
            <P>Nombre(s)</P>
            <Input type='text' placeholder='Nombres(s)' {...register('nombres', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Apellido Paterno</P>
            <Input type='text' placeholder='Apellido paterno' {...register('apellido_p', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Apellido Materno</P>
            <Input type='text' placeholder='Apellido materno' {...register('apellido_m', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Fecha de nacimiento</P>
            <Input type='date' {...register('fecha_n', {required: true})}></Input>
            <P>Estado de nacimiento</P>
            <Input type='text' placeholder='Estado de nacimiento' {...register('estado_n', {required: true})} onChange={validarLetrasYEspacios}></Input>
            <P>Municipio de nacimiento</P>
            <Input type='text' placeholder='Municipio de nacimiento' {...register('municipio', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Localidad</P>
            <Input type='text' placeholder='Localidad' {...register('localidad', {required: false})}></Input>
            <P>Agencia</P>
            <Input type='text' placeholder='Agencia' {...register('agencia', {required: false})}></Input>
            <P>Barrio</P>
            <Input type='text' placeholder='Barrio' {...register('barrio', {required: false})}></Input>
            <Div2>
              <Button type='submit'>Registrar paciente</Button>
            </Div2>
          </Form>
            {/* Map of items */}
            {/* {Inputs.map((Input) => (
                <Inp1 
                key={Input.id} 

                TextIn1={Input.TextIn1} 
                srcNS={Input.srcNS}

                showButton={Input === Inputs.length - 1}
                value={inputs[Input.id]}
                onChange={event => handleInputChange(event, Input.id)}
                placeholder={Input.Place}
                />
            ))} */}
            <Div2>
                {/* <ButtonLD 
                textLD={"Guardar Paciente"}
                type='submit'
                onClickk={handleSubmit}
                /> */}
            </Div2>
        </Div1>
    </>
  )
}

const Button = styled.button`
    height: 52px;
    width: auto;
    border-radius: 8px;
    background-color: #000000;
    cursor: pointer;
    color: white;
    border: black;
    transition: ease-out 0.5s;
    padding: 14px 24px;

    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;

    &:hover {
      box-shadow: inset 0 -100px 0 0 gray;
    }

    &:active {
        transform: scale(0.9);
      }
`

const Form = styled.form`
    width: 661px;
    text-align: left;
`

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const P = styled.label`
    margin: 0px;
    margin-top: 5px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Input = styled.input`
    width: calc(100% - 48px);
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;
`

const Inputs = [
  { id: 'nombres', TextIn1: 'Nombre(s)', Place: 'Nombre(s)', validacion: valor => valor === '' || /^[A-Za-z]+$/.test(valor)},
  { id: 'apellido_p', TextIn1: 'Apellido Paterno', Place: 'Apellido paterno', validacion: valor => valor === '' || /^[A-Za-z]+$/.test(valor)},
  { id: 'apellido_m', TextIn1: 'Apellido Materno', validacion: valor => valor === '' || /^[A-Za-z]+$/.test(valor)},
  { id: 'fecha_n', TextIn1: 'Fecha de Nacimiento', Place: '0000-00-00'},
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

const Div2 = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`


export default CreateP