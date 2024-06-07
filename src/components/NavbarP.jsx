import React from 'react'
import styled from 'styled-components'
import ButtonB from './buttons/ButtonB.jsx'
import { useLocation } from 'react-router-dom'
import ButtonLD from './buttons/ButtonLD.jsx'

const Div1 = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`
const Div2 = styled.div`
  width: 40%;
  text-align: left;
`
const Div3 = styled.div`
  width: 20%;
`
const Img = styled.img`
  height: 154px;
`

const Div4 = styled.div`
  width: 40%;
  justify-content: center;
  display: flex;
  gap: 48px;
`

const H1 = styled.h1`
  font-size: 20px;
  margin-left: 80px;
`


const NavbarP = () => {
  const location = useLocation();

  return (
    <Div1>
      <Div2>
        <H1>LIFELINE</H1>
      </Div2>
      <Div3>
        <Img src='./img/Logo.png' alt='img'/>
      </Div3>
      <Div4>
          <ButtonB textB={"Home"} Bref={"/"} currentPath={location.pathname} />
          <ButtonB textB={"About"} Bref={"/about"}/>
          <ButtonLD textLD={"Login"} LDref={"/login"}/>
      </Div4>
    </Div1>
  )
}

export default NavbarP