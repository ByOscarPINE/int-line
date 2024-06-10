import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    display: flex;
    height: auto;
`

const Aside1 = styled.aside`
    width: 50%;
`

const Aside2 = styled.aside`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    width: 60%;
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Img = styled.img`
    width: 710px;
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
    </Div1>
  )
}

export default HomeS