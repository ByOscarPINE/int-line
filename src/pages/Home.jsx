import React from 'react'
import styled from 'styled-components'
import Footer from '../components/parts/Footer.jsx'
import NavbarP from '../components/parts/NavbarP.jsx'
import HomeP from '../components/parts/HomeP.jsx'
import HomeS from '../components/parts/HomeS.jsx'
import HomeD from '../components/parts/HomeD.jsx'
import HomeF from '../components/parts/HomeF.jsx'
import NavbarPM from '../components/parts/NavbarPM.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Div1 = styled.div`
    margin-top: 164px;
    height: auto;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
    margin-top: 0px;
    }
`

const Div2 = styled.div`
    margin-top: 110px;
    height: auto;
    width: 857px;
    padding: 10px;

    @media (max-width: 767px) {
    margin-top: 0px;
    }
`
const Div3 = styled.div`
    margin-top: 110px;
    width: auto;
    height: 576px;

    @media (max-width: 767px) {
    margin-bottom: 50px;
    }
`

const Div4 = styled.div`
    align-self: flex-start;
    margin-top: 188px;
    width: 733px;
    height: 88px;
    margin-left: 80px;
    border-radius: 10px;
    @media (max-width: 767px) {
    display: none;
    }
`

const Div5 = styled.div`
    margin-top: 60px;
    margin-bottom: 52px;
    width: 80%;
    max-width: 80%;
    height: 252px;

    @media (max-width: 767px) {
    display: none;
    }
`


const Home = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };

  return (
    <>
    <NavbarP/>
    <NavbarPM DatosPM={DatosPM}/>
    <Div1>
        <Div2>
            <HomeP/>
        </Div2>
        <Div3>
            <HomeS/>
        </Div3>
        <Div4>
            <HomeD></HomeD>
        </Div4>
        <Div5>
        <Slider {...settings}>
      <HomeF text="“La tecnología en las manos adecuadas puede transformar el mundo.”" text1="Oscar S." text2="Desarrollador" />
      <HomeF text="“Nos propusimos una meta y trabajamos incansablemente hasta alcanzarla.”" text1="Guillermo G." text2="Diseñador" />
      <HomeF text="“El apoyo mutuo es fundamental para el progreso de la sociedad.”" text1="Alexis R." text2="Líder" />
      <HomeF text="“El trabajo en equipo y la colaboración son clave para el éxito.”" text1="Kevin R." text2="Base de datos" />
    </Slider>
        </Div5>  
    </Div1>
    <Footer />
    </>
  )
}

export default Home

const DatosPM = [
    { toPM: '/', srcPM: '/img/home.svg'},
    { toPM: '/about', srcPM: '/img/create.svg'},
    { toPM: '/login', srcPM: '/img/user_icon_m.png'},
  ]