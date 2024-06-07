import React from 'react'
import styled from 'styled-components'
import ButtonFo from './buttons/ButtonFo'

const Div1 = styled.div`
    width: 100%;
    bottom: 0; 
    height: 264px;
    display: flex;
    background-color: red;
`

const H1 = styled.h2`
    width: 101px;
    height: 36px;
    margin-top: 52px;
    margin-left: 80px;
`

const Div2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: blue;
`

const Div3 = styled.div`
    margin-top: 88px;
    margin-left: 80px;
    width: auto;
    height: 40px;
    display: flex;
    background-color: red;
    gap: 8px;
`

const Div4 = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`

const Footer = () => {

  const buttons = [
    { Imref: './img/FaceIcon.png', Fref: '/about', otraProp2: 'valor2' },
    { Imref: './img/InstaIcon.png', otraProp: 'valor3', otraProp2: 'valor4' },
    { Imref: './img/YouIcon.png', otraProp: 'valor5', otraProp2: 'valor6' },
  ];


  return (
    <Div1>
      <Div2>
        <H1>LIFELINE</H1>
        <Div3>
        {buttons.map((button, index) => (
      <ButtonFo key={index} Imref={button.Imref} Fref={button.Fref}/>
    ))}
        </Div3>
      </Div2>
      <Div4>
      </Div4>
    </Div1>
  )
}

export default Footer