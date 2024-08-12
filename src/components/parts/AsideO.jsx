import React from 'react'
import styled from 'styled-components'
import { useTasks } from '../../context/TaskContext';

const AsideO = () => {

    const { DatosP} = useTasks();
  return (
    <Div1>
        <P>Datos del paciente</P>
        <Box>
            <PI>Nombre(s): {DatosP.nombres}</PI>
            <PI>Apellido Paterno: {DatosP.apellido_paterno}</PI>
            <PI>Apellido Materno: {DatosP.apellido_materno}</PI>
            <PI>Estado de nacimiento: {DatosP.estado_nacimiento}</PI>
            <PI>Municipio de nacimiento: {DatosP.municipio_nacimiento}</PI>
            <PI>Localidad: {DatosP.localidad}</PI>
            <PI>Agencia: {DatosP.agencia}</PI>
            <PI>Barrio: {DatosP.barrio}</PI>
        </Box>
    </Div1>
  )
}

export default AsideO

const Div1 = styled.div`
    width: 100%;
    text-align: left;
    margin: auto;
    border-radius: 8px;
`

const Box = styled.div`
    margin-top: 8px;
    width: 100%;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    background-color: #F5F5F5;
`

const P = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const PI = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    margin: 24px;
    color: #828282;
`