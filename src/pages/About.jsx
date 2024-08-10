import React from 'react'
import Footer from '../components/parts/Footer.jsx'
import NavbarP from '../components/parts/NavbarP.jsx'
import styled from 'styled-components'
import NavbarPM from '../components/parts/NavbarPM.jsx'

const About = () => {
  return (
    <>
    <NavbarP/>
    <NavbarPM DatosPM={DatosPM}/>
    <Div1>
        <AsideL>
          {/* <Div2> */}
          <H1>Sobre Nosotros</H1>
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
          {/* </Div2> */}
        </AsideL>
        <AsideR><Img src='/img/AboutImg.svg'></Img></AsideR>
    </Div1>
    <Footer />
    </>
  )
}

export default About

const DatosPM = [
  { toPM: '/', srcPM: '/img/homepm.svg'},
  { toPM: '/about', srcPM: '/img/create.svg'},
  { toPM: '/login', srcPM: '/img/profile.svg'},
]

const Div1 = styled.div`
    margin-top: 164px;
    width: 100%;
    display: flex;

    @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 0px;
    }
`

const AsideL = styled.aside`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
    width: 100%;
    }
`

const H1 = styled.h1`
    text-align: left;
    width: 624px;
    margin-bottom: 0px;
    font-size: 64px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;

    @media (max-width: 767px) {
      width: calc(100vw - 60px);
    }
`

const P = styled.p`
    text-align: left;
    width: 624px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

    @media (max-width: 767px) {
    width: calc(100vw - 60px);
    }
`

const AsideR = styled.aside`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
    width: 100%;
    }
`

const Img = styled.img`

  @media (max-width: 767px) {
    width: calc(100vw - 100px);
    mask-image: linear-gradient(black 95%, transparent 100%);
  }
`