import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD'
import { useState } from 'react'
import ButtonMS from '../buttons/ButtonMS'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext'

const Inp2 = ({showButton, TextIn2, x, value, onChange, inputs}) => {

    const {getDg} = useTasks();
    const {id} = useParams();
    const navigate = useNavigate();
    
    // const NavigateTo = () => {
    //     navigate(`/ListP/${id}/Res_1`);
    // };

    const [inputs1, setInputs1] = useState([
        { key: "sintoma: " + 0, descripcion: '' },
      ]);

      const enfermedadesDB = [
        { enfermedad: "Gripe", sintomas: ["fiebre", "tos", "dolor de garganta"] },
        { enfermedad: "Alergia", sintomas: ["estornudos", "picazón", "ojos llorosos"] },
        // Añade más enfermedades y sus síntomas aquí
      ];
    
      const handleInputChange1 = (index, newValue) => {
        const newInputs = [...inputs1];
        newInputs[index].descripcion = newValue;
        setInputs1(newInputs);
      };
    
      const addInput = () => {
        setInputs1([...inputs1, { key: "sintoma: " + inputs1.length, descripcion: '' }]);
      };

      const diagnosticarEnfermedad = () => {
        // Paso 1: Filtrar los síntomas vacíos
        const sintomasUsuario = inputs1.map(input => input.descripcion).filter(sintoma => sintoma.trim() !== '');
      
        // Paso 2 y 3: Cambiar la lógica de coincidencia y ordenar por coincidencia
        let posiblesEnfermedades = enfermedadesDB.map(enfermedad => {
          const coincidencias = enfermedad.sintomas.reduce((total, sintoma) => {
            return total + (sintomasUsuario.includes(sintoma) ? 1 : 0);
          }, 0);
          return { ...enfermedad, coincidencias };
        }).filter(enfermedad => enfermedad.coincidencias > 0) // Filtrar enfermedades sin coincidencias
          .sort((a, b) => b.coincidencias - a.coincidencias) // Ordenar por coincidencias
          .map(enfermedad => enfermedad.enfermedad);
      
        console.log(posiblesEnfermedades);
        return posiblesEnfermedades;
      };

      const onClick = () => {
        console.log(inputs);
        console.log(inputs1);
        diagnosticarEnfermedad();
        getDg(inputs1);
    }

  return (
    <Div1>
        <P>{TextIn2}</P>
        <Input value={value} onChange={onChange}></Input>
        {/* This function exclude the button if the showButton prop is false */}
        {x && 
            <Div3>
                <P>{"Sintoma(s)"}</P>
                {inputs1.map((input1, index) => (
                    <div key={input1.key}>
                    <Input value={input1.value} onChange={(e) => handleInputChange1(index, e.target.value)} />
                    </div>
                ))}
                <ButtonMS onClick={addInput} srcNS={"/img/create.svg"}></ButtonMS>
            </Div3>
        }
        {showButton && 
            <Div2>
                <ButtonLD textLD={"Diagnosticar"} onClick={onClick}/>
            </Div2>
        }
    
    </Div1>
  )
}

export default Inp2

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