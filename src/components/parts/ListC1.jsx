import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    height: 56px;
    width: 90%;
    display: flex;
    gap: 20px;
    align-items: center;
`

const H1 = styled.h3`
    width: 522px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const H2 = styled.h3`
    width: 64px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const H3 = styled.h3`
    width: 48px;
    text-align: left;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const P1 = styled.p`
    width: 70px;
    color: #828282;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    text-align: left;
`

const Div2 = styled.div`
    background-color: #E6E6E6;
    width: 277px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
`

const ListC1 = ({ListC1,InfSeC1}) => {

    
    
  return (
    <Div1>
        <P1>ID</P1>
        <H1>{InfSeC1}</H1>
        <H2>{ListC1}</H2>
        <H3>Fecha</H3>
        <Div2></Div2>
    </Div1>
  )
}

export default ListC1