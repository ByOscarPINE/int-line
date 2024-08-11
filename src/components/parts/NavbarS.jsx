import React from 'react'
import styled from 'styled-components'
import ButtonNS from '../buttons/ButtonNS'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Cookie from 'js-cookie'

const NavbarS = ({NS}) => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const {id} = useParams();

  const onButtonClick = () => {
    Cookie.remove('token');
    navigate('/')
  }
    
  return (
    <D>
      <Boxside>
        <Div11>
          <Button onClick={toggleSidenav}><Img4 src='\img\align_justify_icon.png'></Img4></Button>
        </Div11>
        <Div12>
          <Img2 src='/img/Logo.png'></Img2>
        </Div12>
        <Div13>
          <ButtonSC onClick={onButtonClick}>Cerrar Sesion</ButtonSC>
        </Div13>
      </Boxside>
    <Overlay isOpen={isOpen} onClick={toggleSidenav} />
    <Div1 isOpen={isOpen}>
        <Line/>
        <Div2>
            <H1>LIFELINE</H1>
            <Img src='/img/Logo.png'></Img>
        </Div2>
        <Div3>
        {NS.map((item, index) => (
            <ButtonNS 
            key={index} 
            toNS={item.toNS} 
            TextNS={item.TextNS} 
            srcNS={item.srcNS}
            backgroundColor={item.backgroundColor}
            />
        ))}
        </Div3>
    </Div1>
    </D>
  )
}

export default NavbarS

const Img4 = styled.img`
    width: 20px;
    height: 22px;
`

const Div11 = styled.div`
  width: 33%;
  display: flex;
`

const Div12 = styled.div`
    width: 33%;
`

const Div13 = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-end;
`


const Div1 = styled.div`
  position: fixed;
  height: 100vh;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  overflow-x: hidden;
  transition: width 0.5s, visibility 0.5s ease-in;
  z-index: 2;
  @media (min-width: 769px) {
    width: 256px; 
    visibility: visible;
  }
`;

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

  @media (max-width: 768px) {
  display: none;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(5px);
    transition: 0.5s;
  }
`;


const Button = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Boxside = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`

const ButtonSC = styled.button`
    border-radius: 8px;
    background-color: #000000;
    cursor: pointer;
    color: white;
    border: black;
    transition: ease-out 0.5s;
    padding: 10px 10px;
    margin-right: 10px;

    &:hover {
      box-shadow: inset 0 -100px 0 0 gray;
    }

    &:active {
        transform: scale(0.9);
    }
`


const Img2 = styled.img`
    height: 50px;
`

const D = styled.div`
  display: flex;
`;