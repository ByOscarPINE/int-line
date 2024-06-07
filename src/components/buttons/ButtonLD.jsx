import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    height: 52px;
    width: auto;
    border-radius: 8px;
    background-color: #000000;
    cursor: pointer;
    color: white;

    &:active {
        transform: scale(0.9);
      }
`

const P = styled.p`
    margin: 0px;
    font-size: 16px;
`
       
const ButtonLD = ({textLD, LDref}) => {
  return (
    <Link to={LDref}><Button ><P>{textLD}</P></Button></Link>
  )
}

export default ButtonLD