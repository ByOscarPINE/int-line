import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
    height: 40px;
    width: 240px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: none;
    transition: ease-out 0.5s;
    background-color: transparent;
    &:hover {
      box-shadow: inset 250px 0 0 0 gray;
      transform: scale(1.03);
    }

    &:active {
        transform: scale(0.9);
      }

`

const P = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Img = styled.img`
    margin-left: 16px;
`

const ButtonNS = ({TextNS, srcNS, toNS ,backgroundColor}) => {
  return (
    <StyledLink to={toNS}>
      <Button style={{ backgroundColor: backgroundColor }}>
        <Img src={srcNS}/>
        <P>{TextNS}</P>
      </Button>
    </StyledLink>
  )
}

export default ButtonNS