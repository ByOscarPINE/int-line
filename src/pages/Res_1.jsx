import React from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideOD from '../components/parts/AsideOD'
import styled from 'styled-components'
import AsideI from '../components/parts/AsideI'
import { useParams } from 'react-router-dom'

const Res_1 = () => {
  const {id} = useParams();
  const {id2} = useParams();

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/${id2}`, TextNS: 'Diagnostico', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]

  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR condition={{pathname: `/ListP/${id}` }}/>
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