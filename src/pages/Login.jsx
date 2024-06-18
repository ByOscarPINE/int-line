import React from 'react'
import Footer from '../components/parts/Footer.jsx'
import NavbarP from '../components/parts/NavbarP.jsx'
import styled from 'styled-components'
import ButtonLD from '../components/buttons/ButtonLD'

const Div1 = styled.div`
    margin-top: 164px;
    height: 100vh;
    width: 100%;
    display: flex;
`

const AsideL = styled.aside`
    width: 50%;
    margin-top: 88px;
    margin-left: 80px;
`

const H1 = styled.h1`
    text-align: left;
    width: 624px;
    margin-bottom: 0px;
    font-size: 64px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`

const Div2 = styled.div`
    margin-top: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 624px;
`

const P = styled.p`
    text-align: left;
    width: 624px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
`

const Input = styled.input`
    height: 48px;
    width: 626px;
    border-radius: 8px;
    border: 1.5px solid #E0E0E0;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 24px;
    
`

const AsideR = styled.aside`
    margin-top: 88px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    border-radius: 8px;
    width: 508px;
`


const Login = () => {
  return (
    <>
    <NavbarP/>
    <Div1>
        <AsideL>
          <H1>Iniciar sesión</H1>
          <Div2>
            <P>Correo electrónico</P>
            <Input type="text" id="email" name="email" placeholder='email@janesfakedomain.net'></Input>
            <P>Contraseña</P>
            <Input type="text" id="password" name="password" placeholder='***********************'></Input>
            <ButtonLD textLD='Iniciar Sesión' LDref='/'/>
          </Div2>
        </AsideL>
        <AsideR><Img src='/img/LoginImg.png'></Img></AsideR>
    </Div1>
    <Footer />
    </>
  )
}

export default Login