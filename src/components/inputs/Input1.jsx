import React from 'react'
import styled from 'styled-components'

const Input1 = ({textIN1, type, placeholder, onChange}) => {

  return (
    <>
        <P>{textIN1}</P>
        <Input type={type} placeholder={placeholder} onChange={onChange}></Input>
    </>
  )
}

export default Input1

const P = styled.label`
    margin: 0px;
    margin-top: 5px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Input = styled.input`
    width: calc(100% - 48px);
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;
`