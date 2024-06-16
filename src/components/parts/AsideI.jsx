import React from 'react'
import styled from 'styled-components'

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
const AsideI = () => {
  return (
    <Div1>
        <P>Input</P>
        <Box>
            <PI>Diagnostico:</PI>
        </Box>
    </Div1>
  )
}

export default AsideI