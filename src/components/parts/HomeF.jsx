import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    width: 405.33px;
    height: 252px;
    background-color: purple;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`

const Div2 = styled.div`
    width: 341px;
    height: auto;
    background-color: red;
    display: flex;
    margin-top: 25px;
`
const H2 =styled.h2`
    font-size: 20px;
    margin: 0px;
    text-align: left;
`

const Div3 = styled.div`
    width: 341px;
    height: 50px;
    display: flex;
    gap: 16px;
    margin-top:48px;
    align-items: center;
`

const Div4 = styled.div`
    width: 45px;
    height: 45px;
    background-color: gray;
    text-align: left;
`

const Div5 = styled.div`
    width: 100px;
    background-color: blue;
    text-align: left;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const H4 = styled.h4`
    background: green;
    margin: 0px;
    font-size: 16px;
`

const P = styled.p`
    background: gray;
    margin: 0px;
    font-size: 16px;
`

const HomeF = ({text,text1,text2}) => {
  return (
    <Div1>
      <Div2>
        <H2>{text}</H2>
      </Div2>
      <Div3>
        <Div4>
          <img src=''></img>
        </Div4>
        <Div5>
          <H4>{text1}</H4>
          <P>{text2}</P>
        </Div5>
      </Div3>
    </Div1>
  )
}

export default HomeF