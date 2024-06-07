import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    height: 40px;
    width: 40px;
    padding: 0;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Img = styled.img`
`

const ButtonFo = ({Fref, Imref}) => {
  return (
    <Link to={Fref}><Button><Img src={Imref}></Img></Button></Link>
  )
}

export default ButtonFo