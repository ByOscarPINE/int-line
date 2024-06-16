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

const Res_2 = () => {

    const BottInf = [
        { Link: '/Res_1', Text: 'Home', srcNS: '/img/home.svg'},
        { Link: '/ListP', Text: 'Buscar', srcNS: '/img/search.svg'},
        { Link: '/ListP', Text: 'Diagnosticar', srcNS: '/img/create.svg'},
    ]

  return (
    <>
    <NavbarS Text={BottInf}/>
    <TopbarR />
    <Div1>
      <Box>
        <AsideO />
      </Box>
    </Div1>
    </>
  )
}

export default Res_2