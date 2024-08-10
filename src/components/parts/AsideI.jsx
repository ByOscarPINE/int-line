import React from 'react'
import styled from 'styled-components'
import { useTasks } from '../../context/TaskContext';
const AsideI = () => {

    const {InfoDg} = useTasks();

    const Fecha = InfoDg.Fecha.split('T')[0] ? InfoDg.Fecha.split('T')[0] : 'No hay fecha';



    const hoy = new Date();
    const fechaNac = new Date(InfoDg.fecha_nacimiento);
    let Edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      Edad--;
    }
  return (
    <Div1>
        <P>Paciente</P>
        <Box>
            <PI>Nombre: {InfoDg.nombres}</PI>
            <PI>Fecha de consulta: {Fecha}</PI>
            <PI>Edad: {Edad}</PI>
            <PI>Peso: {InfoDg.Peso}</PI>
            <PI>Estatura: {InfoDg.Estatura}</PI>
            <PI>Sintomas: 
                {InfoDg.Sintoma_1 && (
                    <>
                        <br/>
                        {InfoDg.Sintoma_1}
                    </>
                )}
                {InfoDg.Sintoma_2 && (
                    <>
                        <br/>
                        {InfoDg.Sintoma_2}
                    </>
                )}
                {InfoDg.Sintoma_3 && (
                    <>
                        <br />
                        {InfoDg.Sintoma_3}
                    </>
                )}
                {InfoDg.Sintoma_4 && (
                    <>
                        <br/>
                        {InfoDg.Sintoma_4}
                    </>
                )}
                {InfoDg.Sintoma_5 && (
                    <>
                        <br/>
                        {InfoDg.Sintoma_5}
                    </>
                )}
                
                
                </PI>
        </Box>
    </Div1>
  )
}

export default AsideI


const Div1 = styled.div`
    width: 100%;
    text-align: left;
    margin: auto;
    margin-top: 0px;
    border-radius: 8px;
`

const Box = styled.div`
    margin-top: 8px;
    width: 100%;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
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