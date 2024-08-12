import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cookie from 'js-cookie';

       
const ButtonLD = ({textLD, LDref, onClickk, submit}) => {

  const onButtonClick = () => {
    Cookie.remove('token');
  }

  return (
    <Link to={LDref}><Button type={submit} onClick={onButtonClick}><P>{textLD}</P></Button></Link>
  )
}

export default ButtonLD

const Button = styled.button`
    height: auto;
    min-height: 52px;
    width: auto;
    border-radius: 8px;
    background-color: #000000;
    cursor: pointer;
    color: white;
    border: black;
    transition: ease-out 0.5s;
    padding: 14px 24px;

    &:hover {
      box-shadow: inset 0 -100px 0 0 gray;
    }

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 768px) {
      padding: 0px 20px;
    }
`

const P = styled.p`
    margin: 0px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`