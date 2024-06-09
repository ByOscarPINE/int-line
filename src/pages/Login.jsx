import React from 'react'
import NavbarP from '../components/NavbarP'
import Footer from '../components/Footer'
import styled from 'styled-components'
import ButtonLD from '../components/buttons/ButtonLD'

const Div1 = styled.div`
    margin-top: 164px;
    height: 100vh;
    width: 100%;
    display: flex;
`

const AsideL = styled.aside`
    margin-top: 88px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const H1 = styled.h1`
    margin-left: 80px;
    text-align: left;
    width: 624px;
    margin-bottom: 0px;
`

const Div2 = styled.div`
    margin-left: 80px;
    margin-top: 92px;
    display: flex;
    flex-direction: column;
`

const P = styled.p`
    text-align: left;
    width: 624px;
    font-size: 16px;
`

const Input = styled.input`
    height: 48px;
    width: 626px;
    border-radius: 8px;
    border: 1.5px solid #E0E0E0;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 24px;
    padding-left: 16px;
`

const AsideR = styled.aside`
    margin-top: 88px;
    width: 100%;
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
          <H1>Login</H1>
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