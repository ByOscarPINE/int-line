import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useTasks } from '../../context/TaskContext'

const ListC2 = ({data, paciente, IDC2, IDC2P, NombreC2, NomSer, LinkC2, DatosC2, Fecha, LinkC22}) => {

    const {deleteTask} = useTasks();

  return (
    <Div1>
        <P1>{data.id}{data.idd}</P1>
        <StyledLink to={LinkC2}><H1>{data.diagnostico}{data.nombres} {data.apellido_p} {data.apellido_m}</H1></StyledLink>
        <StyledLink to={LinkC22}><P2>{DatosC2}</P2></StyledLink>
        <H3>{data.createAt}</H3>
        <Div2><Button onClick={() => deleteTask(data.id)}><Img src='/img/more-horizontal.svg'></Img></Button></Div2>
    </Div1>  
  )
}

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


const P2 = styled.p`
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

export default ListC2