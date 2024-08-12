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
            <PI>Nombre(s): {InfoDg.nombres} {InfoDg.apellido_paterno} {InfoDg.apellido_materno}</PI>
            {/* <PI>Apellido Paterno: {InfoDg.apellido_paterno}</PI>
            <PI>Apellido Materno: {InfoDg.apellido_materno}</PI> */}
            <PI>Fecha de consulta: {Fecha}</PI>
            <PI>Edad: {Edad} años </PI>
            <PI>Peso: {InfoDg.Peso} kg</PI>
            <PI>Estatura: {InfoDg.Estatura} cm</PI>
            <PI>Temperatura: {InfoDg.Temperatura} </PI>
            <PI>Presion arterial: {InfoDg.Presion_Arterial}</PI>
            <PI>Pulso: {InfoDg.Pulso} </PI>
            <PI>Sintomas: 
                {(InfoDg.Sintoma_1 !== '') && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_1}
                    </>
                )}
                {InfoDg.Sintoma_2 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_2}
                    </>
                )}
                {InfoDg.Sintoma_3 && (
                    <>
                        <br />
                        * {InfoDg.Sintoma_3}
                    </>
                )}
                {InfoDg.Sintoma_4 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_4}
                    </>
                )}
                {InfoDg.Sintoma_5 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_5}
                    </>
                )}
                {InfoDg.Sintoma_6 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_6}
                    </>
                )}
                {InfoDg.Sintoma_7 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_7}
                    </>
                )}
                {InfoDg.Sintoma_8 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_8}
                    </>
                )}
                {InfoDg.Sintoma_9 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_9}
                    </>
                )}
                {InfoDg.Sintoma_10 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_10}
                    </>
                )}
                {InfoDg.Sintoma_11 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_11}
                    </>
                )}
                {InfoDg.Sintoma_12 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_12}
                    </>
                )}
                {InfoDg.Sintoma_13 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_13}
                    </>
                )}
                {InfoDg.Sintoma_14 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_14}
                    </>
                )}
                {InfoDg.Sintoma_15 && (
                    <>
                        <br/>
                        * {InfoDg.Sintoma_15}
                    </>
                )}
                
                
            </PI>
            <PI>Alergias:
                {(InfoDg.alergias !== null || InfoDg.alergias !== '') && (
                     <>
                        <br></br>
                            *Ninguna
                     </>
                )}
                {InfoDg.alergias && (
                     <>
                        <br></br>
                            {InfoDg.alergias}
                     </>
                )}
            </PI>   
            <PI>Otros: 
                {(InfoDg.Artritis === 1) && (
                    <>
                        <br/>
                            * Artritis
                    </>
                )}
                {(InfoDg.Asma === 1) && (
                    <>
                        <br/>
                        * Asma
                    </>
                )}
                {(InfoDg.Diabetes === 1) && (
                    <>
                        <br/>
                        * Diabetes
                    </>
                )}
                {(InfoDg.Epilepsia === 1) && (
                    <>
                        <br/>
                        * Epilepsia
                    </>
                )}
                {(InfoDg.Gota === 1) && (
                    <>
                        <br/>
                        * Gota
                    </>
                )}
                {(InfoDg.Hipertension === 1) && (
                    <>
                        <br/>
                        * Hipertension
                    </>
                )}
                {(InfoDg.Neumonia === 1) && (
                    <>
                        <br/>
                        * Neumonia
                    </>
                )}
                {(InfoDg.Obesidad === 1) && (
                    <>
                        <br/>
                        * Obesidad
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