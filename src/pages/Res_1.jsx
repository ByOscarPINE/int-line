import React, { useEffect } from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideOD from '../components/parts/AsideOD'
import styled from 'styled-components'
import AsideI from '../components/parts/AsideI'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

const Res_1 = () => {
  const {id} = useParams();
  const {idd} = useParams();

  const { InfoDg, getHisDg} = useTasks();

  if (id == InfoDg.ID_Paciente && idd == InfoDg.ID_Diagnostico_Paciente) {
  } else {
    useEffect (() => {
      try {
        getHisDg(id, idd);
        console.log('Loading Diagnostic');
      } catch (error) {
        console.log(error);
      }
    }, []); 
  }
  

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/${idd}`, TextNS: 'Diagnostico', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]


    if (InfoDg.length === 0) {
      return     <>
      <NavbarS NS={DatosNS}/>
      <TopbarR condition={{pathname: `/ListP/${id}` }} TextN={'Diagnostico '}/>
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
        <TopbarR condition={{pathname: `/ListP/${id}` }} TextN={'Diagnostico '}/>
        <Div1>
          <Box>
            <AsideI />
            <AsideOD />
          </Box>
        </Div1>
    </>
  )
}

export default Res_1

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
`

const Box = styled.div`
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    margin: auto 25px;
`