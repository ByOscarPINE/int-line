import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD.jsx'
import { Link } from 'react-router-dom'

const Div1 = styled.div`
    height: 134px;
    width: calc(100vw - 256px);
    display: flex;
    margin-left: 256px;
`

const Div2 = styled.div`
    width: 100%;
    height: 134px;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
`

const H1 = styled.h1`
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
`

const Img = styled.img`
    width: 40px;
`

const TopbarR = ({TopRL}) => {
  return (
    <Div1>
        <Div2>
            <Link to={TopRL}>
                <Img src='/img/Back.svg'/>
            </Link>
            <H1>Buscador</H1>
            <ButtonLD textLD={"Cerrar Sesion"} LDref={"/"}></ButtonLD>
        </Div2>
    </Div1>
  )
}

export default TopbarR