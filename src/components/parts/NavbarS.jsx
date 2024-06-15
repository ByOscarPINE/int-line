import React from 'react'
import styled from 'styled-components'
import ButtonNS from '../buttons/ButtonNS'

const Div1 = styled.div`
    position: fixed;
    height: 100vh;
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Div2 = styled.div`
    height: 64px;
    display: flex;
    width: 100%;
    align-items: center;
`

const H1 = styled.h1`
    margin-top: 24px;
    margin-left: 24px;
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
`

const Img = styled.img`
    width: 92.68px;
    margin-left: auto;
    margin-right: 0px;
`
const Div3 = styled.div`
    margin-top: 15px;
    height: 64px;
    display: flex;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Line = styled.div`
    position: fixed;
    background-color: #E6E6E6;
    width: 2px;
    height: 100%;
    margin-left: 256px;
`;

const NavbarS = ({Text}) => {

  return (
    <Div1>
        <Line/>
        <Div2>
            <H1>LIFELINE</H1>
            <Img src='/img/Logo.png'></Img>
        </Div2>
        <Div3>
        {Text.map((item, index) => (
            <ButtonNS key={index} href={item.Link} Text={item.Text} srcNS={item.srcNS}></ButtonNS>
        ))}
        </Div3>
    </Div1>
  )
}

export default NavbarS