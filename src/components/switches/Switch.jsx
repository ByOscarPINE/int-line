import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// Estilos del contenedor del switch
const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  border-radius: 24px;
  border: 3px solid #79747E;
`;

// Estilos del slider
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #49454F;
    transition: .4s;
    border-radius: 50%;
  }
`;

// Estilos del input checkbox (oculto) y cómo afecta al slider cuando está checked
const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: gray;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(16px);
  }
`;

const P = styled.label`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Div1 = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Switch = ({ onChange, textoSW1, id}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    const newState = !isActive;
    setIsActive(newState);
    onChange(id, newState); // Notificar al padre
  };

  return (
    <Div1>
    <P>{textoSW1}</P>
      <SwitchContainer>
        <Checkbox type="checkbox" checked={isActive} onChange={toggleSwitch} />
        <Slider />
      </SwitchContainer>
    </Div1>
  );
};

export default Switch;