import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    width: 733px;
    text-align: left;
    border-radius: 10px;
`
const H1 = styled.h1`
    font-size: 40px;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
`

const P1 = styled.p`
    margin: 0;
    height: 44px;
    border-radius: 10px;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #828282;
`


const HomeD = () => {
  return (
    <Div1>
        <H1>Team</H1>
        <P1>“El futuro complementado con la salud”</P1>
    </Div1>
  )
}

export default HomeD