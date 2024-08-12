import React from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideO from '../components/parts/AsideO'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import { useEffect } from 'react'

const Res_2 = () => {
  const {id} = useParams();

  const { getPacienteInfo, DatosP} = useTasks();

  if (id !== DatosP.id_paciente) {
    useEffect (() => {
      try {
        getPacienteInfo(id);
      } catch (error) {
        console.log(error);
      }
    }, []);
  }


    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Inicio', srcNS: '/img/home.svg'},
        { toNS: `/ListH/${id}/Res_2`, TextNS: 'Datos', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]


  if (DatosP.length === 0) {
    return     <>
    <NavbarS NS={DatosNS}/>
    <TopbarR TextN={'Datos '}/>
    <Div1>
      <Box>
        <p>cargando.....</p>
      </Box>
    </Div1>
    </>
  }

  return (
    <>
    <NavbarS NS={DatosNS}/>
    <TopbarR TextN={DatosP.nombres + ' ' + DatosP.apellido_paterno + ' ' + DatosP.apellido_materno}/>
    <Div1>
      <Box>
        <AsideO/>
      </Box>
    </Div1>
    </>
  )
}

export default Res_2

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
    }
`

const Box = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    margin: auto 25px;
`
