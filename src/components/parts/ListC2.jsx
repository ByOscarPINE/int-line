import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

import { useTasks } from '../../context/TaskContext'

const ListC2 = ({data, LinkC2, LinkC22, Datos, idd}) => {

    const {deleteTask} = useTasks();

    const fecha = data.Fecha.split('T')[0];

    if (!data) {
        return <p>Cargado</p>;
    }

    const {id} = useParams();

  return (
    <Div1>
        <P1>{idd}</P1>
        <StyledLink to={LinkC2}><H1>{data.Nombre_Diagnostico}{data.nombres} {data.apellido_paterno} {data.apellido_materno}</H1></StyledLink>
        <StyledLink to={LinkC22}><P2>{Datos}</P2></StyledLink>
        <H3>{fecha}</H3>
        {/* <Div2><Button onClick={() => deleteTask(data.id_paciente)}><Img src='/img/more-horizontal.svg'></Img></Button></Div2> */}
    </Div1>  
  )
}

const Div1 = styled.div`
    height: 56px;
    width: 90%;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 10px;

    @media (max-width: 768px) {
        height: 80px;    
    }

    &:hover {
        background-color: #F2F2F2;
        transition: 0.3s;
        transform: scale(1.01);
    }
`

const H1 = styled.h3`
    width: 522px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    color: black;

    @media (max-width: 768px) {
        width: 100px;
    }

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
    @media (max-width: 768px) {
        width: auto;
    }
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
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    background-color: #F2F2F2;

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