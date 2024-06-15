import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`

    width: 405.33px;
    height: 252px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
    transition: ease-out 0.5s;

    &:hover {
      transform: scale(1.1);
    }
`

const Div2 = styled.div`
    width: 341px;
    height: auto;
    display: flex;
    margin-top: 25px;
`
const H2 =styled.h2`
    font-size: 20px;
    margin: 0px;
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
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
    text-align: left;
`

const Div5 = styled.div`
    width: 100px;
    text-align: left;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

const H4 = styled.h4`
    margin: 0px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
`

const P = styled.p`
    margin: 0px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #828282;
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