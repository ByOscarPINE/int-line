import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer.jsx'
import NavbarP from '../components/NavbarP.jsx'
import HomeP from '../components/parts/HomeP.jsx'
import HomeS from '../components/parts/HomeS.jsx'
import HomeD from '../components/parts/HomeD.jsx'
import HomeF from '../components/parts/HomeF.jsx'

const Div1 = styled.div`
    margin-top: 164px;
    height: auto;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Div2 = styled.div`
    margin-top: 110px;
    height: auto;
    width: 857px;
    padding: 10px;
`
const Div3 = styled.div`
    margin-top: 110px;
    width: auto;
    height: 576px;
`

const Div4 = styled.div`
    align-self: flex-start;
    margin-top: 188px;
    width: 733px;
    height: 88px;
    margin-left: 80px;
    border-radius: 10px;
`

const Div5 = styled.div`
    margin-top: 40px;
    margin-bottom: 52px;
    width: 100%;
    height: 252px;
    display: flex;
    justify-content: center;
    gap: 32px;
`


const Home = () => {

  return (
    <>
    <NavbarP/>
    <Div1>
        <Div2>
            <HomeP/>
        </Div2>
        <Div3>
            <HomeS/>
        </Div3>
        <Div4>
            <HomeD></HomeD>
        </Div4>
        <Div5>
            <HomeF text="“La tecnología en las manos correctas logra
                resultados increíbles.”" text1="Oscar S." text2="Desarrolador"></HomeF>
            <HomeF text="“Teníamos una meta clara y no paramos hasta cumplirla”."
                text1="Guillermo G." text2="Disenador"></HomeF>
            <HomeF text="“Como sociedad debemos apoyarnos, ese siempre lo tuvimos en mente“."
                text1="Alexis R." text2="Lider"></HomeF>
        </Div5>  
    </Div1>
    <Footer />
    </>
  )
}

export default Home