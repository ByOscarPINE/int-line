import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/parts/Navbar.jsx'
import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext.jsx'

const Div1 = styled.div`
    height: auto;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Home = () => {

    const {validarLetrasYEspacios, validaremail, validarpassword} = useTasks();
    const { register, formState: { isSubmitting } } = useForm()

    const onClick = async (data) => {
        console.log(data)
    }

  return (
    <>
    <Navbar/>
    <Div1>
        Nombre: <input type="text" name="nombre" id="nombre" {...register('alergias', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios} /><br/>
        Email: <input type="email" name="email" id="email" onChange={validaremail}/><br/>
        Contrasenia: <input type="password" name="password" id="password" onChange={validarpassword}/><br/>
        Rol: <input type="text" name="rol" id="rol"/><br/>
        <button type="submit" disabled={isSubmitting}>Registrar</button>
    </Div1>
    </>
  )
}

export default Home