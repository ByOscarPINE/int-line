import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    height: 52px;
    width: auto;
    border-radius: 8px;

    cursor: pointer;
    transition: ease-out 0.5s;

    &:hover {
        box-shadow: inset 0 -100px 0 0 #D5D5D5;
    }

    &:active {
        transform: scale(0.9);
      }
`

const P = styled.p`
    margin: 0px;
    font-size: 20px;
`
       
const ButtonB = ({textB, Bref, currentPath}) => {
    const isActive = Bref === currentPath;
  return (
    <Link to={Bref}><Button ><P>{textB}</P></Button></Link>
  )
}

export default ButtonB