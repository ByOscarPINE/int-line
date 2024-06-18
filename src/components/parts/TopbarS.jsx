import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Div1 = styled.div`
    height: 134px;
    width: calc(100vw - 256px);
    display: flex;
    margin-left: 256px;
`

const Div2 = styled.div`
    width: 50%;
    height: 134px;
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Div3 = styled.div`
    display: flex;
    gap: 16px;
`

const Div4 = styled.div`
    position: relative;
    margin-top: 39px;
    margin-left: auto;
    margin-right: 60px;
`
const H1 = styled.h1`
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    margin-left: 48px;
    margin-top: 24px;
`


const Input = styled.input`
    width: 405px;
    height: 40px;
    border-radius: 8px;
    margin-left: 48px;
    border: 1px solid #E0E0E0;
`

const ButtonF = styled.button`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    height: 43px;
`

const Img = styled.img`
    width: 24px;
`

const P = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #828282;
`


const TopbarS = ({Datos, Search}) => {
const [consulta, setConsulta] = useState('');

const handleChange = event => {
    setConsulta(event.target.value);
    console.log(consulta)
};

const resultadosDeBusqueda = consulta
? Datos.filter(paciente =>  
  paciente[Search].toLowerCase().includes(consulta.toLowerCase())
  )
: [];


  return (
    <Div1>
        <Div2>
            <H1>Buscador</H1>
            <Div3>
                <Input value={consulta} onChange={handleChange}></Input>
                <ul>
                {resultadosDeBusqueda.map(paciente => (
                    <li key={paciente.id}>
            <Link to={{ pathname: `/${paciente.id}`, state: { category: paciente.category} }}>{paciente[Search]}<p>{paciente.description}</p></Link>
            
                </li>
                ))}
                </ul>
                <ButtonF><Img src='/img/FiltroImg.png'/><P>Filtro</P></ButtonF>
            </Div3>
        </Div2>
        <Div4>
            <ButtonLD textLD={"Cerrar Sesion"} LDref={"/"}></ButtonLD>
        </Div4>
    </Div1>
  )
}

export default TopbarS