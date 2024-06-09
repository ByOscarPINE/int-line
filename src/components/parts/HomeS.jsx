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
    flex-direction: column;
    justify-content: center;
`

const Img = styled.img`
    width: 710px;
    height: 576px;
`

const HomeS = () => {

  return (
    <Div1>
        <Aside1>
            <Img src='./img/HomeI.svg'></Img>
        </Aside1>
        <Aside2>
            <h1>UN EVALUADOR MEDICO HECHO PARA PERSONAL MEDICO CON EL OBJETIVO DE 
            QUE TODOS GOZEMOS DE BUENA SALUD.</h1>
        </Aside2>
    </Div1>
  )
}

export default HomeS