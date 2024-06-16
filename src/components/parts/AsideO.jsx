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
    background-color: #F5F5F5;
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

const AsideO = () => {
  return (
    <Div1>
        <P>Output</P>
        <Box>
            <PI>Nombre:</PI>
        </Box>
    </Div1>
  )
}

export default AsideO