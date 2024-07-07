import React from 'react'
import styled from 'styled-components'
import ButtonNS from '../buttons/ButtonNS'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

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
  @media (min-width: 768px) {
    display: none;
  }
`;

const D = styled.div`
  display: flex;
`;

const NavbarS = ({NS}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
      setIsOpen(!isOpen);
    };

    const {id} = useParams();

    const data = id;

    
  return (
    <D>
    <Button onClick={toggleSidenav}>Open</Button>
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