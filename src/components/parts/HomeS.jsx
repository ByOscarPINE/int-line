import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    display: flex;
    height: auto;

    @media (max-width: 767px) {
    flex-direction: column;
    }
`

const Aside1 = styled.aside`
    width: 50%;

    @media (max-width: 767px) {
        display: none;
    }

`

const Aside2 = styled.aside`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
    }
`

const Aside3 = styled.aside`
    width: 100%;

    @media (min-width: 768px) {
    display: none;
  }
`

const H1 = styled.h1`
    width: 60%;
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-align: center;

    @media (max-width: 767px) {
    font-size: 30px;
    width: 70%;
    }
`

const Img = styled.img`
    width: 710px;
    mask-image: linear-gradient(black 95%, transparent 100%);
    @media (max-width: 767px) {
    width: 400px;
    }
`

const HomeS = () => {

  return (
    <Div1>
        <Aside1>
            <Img src='./img/HomeI.svg'></Img>
        </Aside1>
        <Aside2>
            <H1>UN EVALUADOR MEDICO HECHO PARA PERSONAL MEDICO CON EL OBJETIVO DE 
            QUE TODOS GOZEMOS DE BUENA SALUD.</H1>
        </Aside2>
        <Aside3>
            <Img src='./img/HomeI.svg'></Img>
        </Aside3>
    </Div1>
  )
}

export default HomeS