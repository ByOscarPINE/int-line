import React from 'react'
import styled from 'styled-components'
import ButtonB from '../buttons/ButtonB.jsx'
import { useLocation } from 'react-router-dom'
import ButtonLD from '../buttons/ButtonLD.jsx'
import { Link } from 'react-router-dom'

const Div1 = styled.div`

  @media (min-width: 767px) {
  position: fixed;
  width: 100%;
  height: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 25px 25px white;
  z-index: 100;
  }
`
const Div2 = styled.div`
  width: 40%;
  text-align: left;

  @media (max-width: 768px) {
   display: none;
  }
`
const Div3 = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    display: none;
  }
`
const Img = styled.img`
  height: 154px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Div4 = styled.div`
  width: 40%;
  justify-content: center;
  display: flex;
  gap: 15px;

  &:hover > * {
    filter: blur(4px);
    transition: filter 0.3s ease;
  }
    
  &:hover > *:hover {
    filter: blur(0);
    transition: filter 0.3s ease;
  }

  @media (max-width: 768px) {
    display: none;
  
  }
`

const H1 = styled.h1`
  font-size: 30px;
  margin-left: 80px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`

const Img1 = styled.img`
  width: 150px;

  @media (min-width: 768px) {
    display: none;
  }
`


const NavbarP = () => {
  const location = useLocation();

  return (
    <Div1>
      <Img1 loading='lazy' src='./img/Logo-I.svg'></Img1>
      <Div2>
        <H1>LIFELINE</H1>
      </Div2>
      <Div3>
        <Link to={'/'}><Img loading='lazy' src='./img/Logo.png' alt='img'/></Link>
      </Div3>
      <Div4>
          <ButtonB textB={"Menu Principal"} Bref={"/"} currentPath={location.pathname} />
          <ButtonB textB={"Sobre Nosotros"} Bref={"/about"}/>
          <ButtonLD textLD={"Iniciar sesión"} LDref={"/login"}/>
      </Div4>
    </Div1>
  )
}

export default NavbarP