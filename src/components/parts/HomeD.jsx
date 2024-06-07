import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    width: 733px;
    text-align: left;
    border-radius: 10px;
`
const H1 = styled.h1`
    font-size: 35px;
    background: red;
    height: 44px;
    margin: 0;
    border-radius: 10px;
`

const P1 = styled.p`
    margin: 0;
    background: blue;
    height: 44px;
    border-radius: 10px;
`


const HomeD = () => {
  return (
    <Div1>
        <H1>Developers</H1>
        <P1>“El futuro complementado con la salud”</P1>
    </Div1>
  )
}

export default HomeD