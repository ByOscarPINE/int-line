import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD'

const Div1 = styled.div`
    width: 661px;
    text-align: left;
`

const Input = styled.input`
    width: calc(100% - 48px);
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;
`

const P = styled.p`
    margin: 0px;
    margin-top: 5px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Inp1 = ({value, onChange, TextIn1 }) => {


    const handleButtonClick = () => {
        console.log("inputs");
      };
    
  return (
    <Div1>
        <P>{TextIn1}</P>
        <Input value={value} onChange={onChange}></Input>
                {/* This function exclude the button if the showButton prop is false */}
    </Div1>
  )
}

export default Inp1