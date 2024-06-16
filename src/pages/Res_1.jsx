import React from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideO from '../components/parts/AsideO'
import styled from 'styled-components'
import AsideI from '../components/parts/AsideI'


const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
`

const Box = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    margin: auto 25px;
`

const Res_1 = () => {

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: '/ListP', TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: '/Res_1', TextNS: 'Diagnostico', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]

  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR TopRL={"/ListP"}/>
        <Div1>
          <Box>
            <AsideI />
            <AsideO />
          </Box>
        </Div1>
    </>
  )
}

export default Res_1