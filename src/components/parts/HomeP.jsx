import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD'

const H11 = styled.h1`
    margin-top: 0px;
    background-color: red;
    height: 64px;
    font-family: Arial, sans-serif;
`

const P1 = styled.div`
    margin-top: 25px;
    background-color: blue;
    font-size: 24px;
    font-family: Inter, Regular;
    color: #828282;
`

const Div4 = styled.div`
    margin-top: 25px;
    background-color: red;
`

const HomeP = () => {
  return (
    <div>
        <H11>LIFELINE</H11>
        <P1>Diagnósticos rápidos a tus manos</P1>
        <Div4>
            <ButtonLD textLD={"Diagnosticar"}/>
        </Div4>
    </div>
  )
}

export default HomeP