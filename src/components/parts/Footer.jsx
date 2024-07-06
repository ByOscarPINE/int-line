import React from 'react'
import styled from 'styled-components'
import ButtonFo from '../buttons/ButtonFo'

const Footer = () => {

  const buttons = [
    { Imref: './img/FaceIcon.png', Fref: '/about', otraProp2: 'valor2' },
    { Imref: './img/YouIcon.png', otraProp: 'valor5', otraProp2: 'valor6' },
    { Imref: './img/InstaIcon.png', otraProp: 'valor3', otraProp2: 'valor4' },
  ];


  return (
    <>
    <Line />
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
    </>
  )
}

export default Footer


const Div1 = styled.div`
    width: 100%;
    bottom: 0; 
    height: 264px;
    display: flex;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }
`

const H1 = styled.h2`
    width: 101px;
    height: 36px;
    margin-top: 52px;
    margin-left: 80px;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 767px) {
    margin-left: 30px;
    }
`

const Div2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Div3 = styled.div`
    margin-top: 88px;
    margin-left: 80px;
    width: auto;
    height: 40px;
    display: flex;
    gap: 8px;

    @media (max-width: 767px) {
    margin-top: 30px;
    margin-left: 30px;
    } 
`

const Div4 = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Line = styled.div`
    background-color: #E6E6E6;
    width: 90%;
    height: 2px;
    margin: auto;
`;