import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height: 40px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 8px;
    border: none;
    transition: ease-out 0.5s;
    margin-top: 8px;

    &:hover {
      box-shadow: inset 0 0 0 30px gray;
      transform: scale(1.03);
    }

    &:active {
        transform: scale(0.9);
      }

`


const Img = styled.img`
    margin-left: 16px;
`

const ButtonMS = ({srcNS}) => {
  return (
    <Button>
        <Img src={srcNS}/>
    </Button>
  )
}

export default ButtonMS