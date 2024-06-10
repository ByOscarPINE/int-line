import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div1 = styled.div`
    height: 56px;
    width: 90%;
    display: flex;
    gap: 20px;
    align-items: center;
`

const H1 = styled.h3`
    width: 522px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    color: black;
`

const H2 = styled.h3`
    width: 64px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const H3 = styled.h3`
    width: 48px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const P1 = styled.p`
    width: 70px;
    color: #828282;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    text-align: left;
`

const Div2 = styled.div`
    width: 277px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;

`

const Button = styled.button`
    border: none;
    height: 24px;
    background-color: transparent;
`;

const Img = styled.img`
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;


const ListC2 = ({IDC2, NombreC2, LinkC2}) => {
  return (
    <Div1>
        <P1>{IDC2}</P1>
        <StyledLink to={LinkC2}><H1>{NombreC2}</H1></StyledLink>
        <H2>Datos</H2>
        <H3>Fecha</H3>
        <Div2><Button><Img src='/img/MoreImg.png'></Img></Button></Div2>
    </Div1>
  )
}

export default ListC2