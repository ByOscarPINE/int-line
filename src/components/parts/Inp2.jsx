import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD'
import { useState } from 'react'
import ButtonNS from '../buttons/ButtonNS'
import ButtonMS from '../buttons/ButtonMS'

const Div1 = styled.div`
    width: 661px;
    text-align: left;
    margin-left: 30px;
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

const Div2 = styled.div`
    margin-top: 15px;
`

const Div3 = styled.div`
`

const Inp2 = ({showButton, TextIn2, x}) => {
    const [inputs, setInputs] = useState([<P>{"Sintomas"}</P>,
    ]);

    const addInput = () => {
        setInputs([...inputs, <Input key={inputs.length}/>]);
    };

  return (
    <Div1>
        <P>{TextIn2}</P>
        <Input></Input>
        {/* This function exclude the button if the showButton prop is false */}
        {x && 
            <Div3>
                {inputs}
                <ButtonMS onClick={addInput} srcNS={"/img/create.svg"}></ButtonMS>
            </Div3>
        }
        {showButton && 
            <Div2>
                <ButtonLD textLD={"Diagnosticar"}/>
            </Div2>
        }
    
    </Div1>
  )
}

export default Inp2