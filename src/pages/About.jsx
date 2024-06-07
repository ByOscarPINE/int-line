import React from 'react'
import { Link } from 'react-router-dom'
import NavbarP from '../components/NavbarP'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Div1 = styled.div`
margin-top: 130px;
height: 100vh;
width: 100%;
background-color: gray;
`

const About = () => {
  return (
    <Div1>About
        <NavbarP/>
        Home
        <Footer />
    </Div1>
  )
}

export default About