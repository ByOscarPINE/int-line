import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
    width: 100%;
    height: 44px;
    bottom: 0;
    position: fixed;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(100% / 3);

    @media (min-width: 768px) {
        display: none;
    }
`

const NavbarPM = ({DatosPM}) => {
  return (
    <Div>
        {DatosPM.map((item, index) => (
            <Link key={index} to={item.toPM} >
            <img src={item.srcPM}>
            </img>
            </Link>
        ))}
    </Div>
  )
}

export default NavbarPM