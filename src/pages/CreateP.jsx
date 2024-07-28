import React from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import Inp1 from '../components/parts/Inp1'
import styled from 'styled-components'
import { useState } from 'react'
import ButtonLD from '../components/buttons/ButtonLD'
import { useTasks } from '../context/TaskContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const CreateP = () => {

    const {registrarPacc, validarLetrasYEspacios, loadPacientes} = useTasks();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    
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
          <Form onSubmit={handleSubmit(async values => {
            console.log(values)
            const response = await registrarPacc(values)
            loadPacientes();
            if (response.status === 200) {
              navigate('/ListH')
            } else {
              alert('Error al registrar paciente')
            }
          })}>
            <P>Nombre(s)</P>
            <Input type='text' placeholder='Nombres(s)' {...register('nombres', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Apellido Paterno</P>
            <Input type='text' placeholder='Apellido paterno' {...register('apellido_paterno', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Apellido Materno</P>
            <Input type='text' placeholder='Apellido materno' {...register('apellido_materno', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Fecha de nacimiento</P>
            <Input type='date' {...register('fecha_nacimiento', {required: true})}></Input>
            <P>Estado de nacimiento</P>
            <Input type='text' placeholder='Estado de nacimiento' {...register('estado_nacimiento', {required: true})} onChange={validarLetrasYEspacios}></Input>
            <P>Municipio de nacimiento</P>
            <Input type='text' placeholder='Municipio de nacimiento' {...register('municipio_nacimiento', {required: true, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
            <P>Localidad</P>
            <Input type='text' placeholder='Localidad' {...register('localidad', {required: false})} onChange={validarLetrasYEspacios}></Input>
            <P>Agencia</P>
            <Input type='text' placeholder='Agencia' {...register('agencia', {required: false})} onChange={validarLetrasYEspacios}></Input>
            <P>Barrio</P>
            <Input type='text' placeholder='Barrio' {...register('barrio', {required: false})} onChange={validarLetrasYEspacios}></Input>
            <Div2>
              <Button type='submit'>Registrar paciente</Button>
            </Div2>
          </Form>
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

    @media (max-width: 768px) {
        width: 90%;
    }
`

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
      margin-top: 20px;
    }
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

    @media (max-width: 768px) {
    width: 100%;
    }
`

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