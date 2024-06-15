import React from 'react'
import Footer from '../components/parts/Footer.jsx'
import NavbarP from '../components/parts/NavbarP.jsx'
import styled from 'styled-components'

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
    font-size: 64px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`

const P = styled.p`
    margin-left: 80px;
    text-align: left;
    width: 624px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
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

const About = () => {
  return (
    <>
    <NavbarP/>
    <Div1>
        <AsideL>
          <H1>About Us</H1>
          <P>¡Bienvenido a LIFELINE!
            Somos tu aliado en la búsqueda de respuestas sobre tu salud. 
            Nuestra plataforma te ofrece un diagnóstico rápido y preciso 
            de posibles enfermedades basado en síntomas específicos que experimentes.
            <br />
            Con una interfaz fácil de usar y una base de datos robusta, 
            nuestro sistema utiliza algoritmos avanzados respaldados por 
            datos médicos actualizados para proporcionarte información 
            confiable sobre tus preocupaciones de salud.
            <br />
            <br />
            En LIFELINE, creemos en el poder de la información y la 
            tecnología para empoderarte en tu viaje hacia el bienestar. 
            Ya sea que estés buscando entender mejor tus síntomas, 
            obtener una segunda opinión o simplemente obtener orientación 
            sobre tu salud, estamos aquí para ayudarte en cada paso del camino.
          </P>
        </AsideL>
        <AsideR><Img src='/img/AboutImg.png'></Img></AsideR>
    </Div1>
    <Footer />
    </>
  )
}

export default About