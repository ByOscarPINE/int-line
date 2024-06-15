import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height: 40px;
    width: 240px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: none;
`

const P = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Img = styled.img`
    margin-left: 16px;
`

const ButtonNS = ({Text, srcNS}) => {
  return (
    <Button><Img src={srcNS}/><P>{Text}</P></Button>
  )
}

export default ButtonNS