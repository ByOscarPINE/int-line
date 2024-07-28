import React, { useEffect } from 'react'
import NavbarS from '../components/parts/NavbarS'
import TopbarR from '../components/parts/TopbarR'
import styled from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import { useForm } from 'react-hook-form'
import Switch from '../components/switches/Switch'
import { useRef } from 'react'
import ButtonMS from '../components/buttons/ButtonMS'

const Diagnostic = () => {
    const {id} = useParams();
    const {Pacientes, inserDiagnostic ,registrarPacc, validarLetrasYEspacios, validarNumeros, getDg, getSint, Sintomas} = useTasks();
    const { register, handleSubmit } = useForm();
    const formRef = useRef(null);

    useEffect(() => {
      let isActive = true; // Controla si el componente está montado
    
      const fetchSintomas = async () => {
        try {
          await getSint();
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchSintomas();
    
      // Función de limpieza
      return () => {
        isActive = false; // Indica que el componente se ha desmontado
      };
    }, []);

    const DatosNS = [
      { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
      { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
      { toNS: `/ListP/${id}/Diagnostic`, TextNS: 'Diagnosticar', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]
      const [switchStates, setSwitchStates] = useState({
      diabetes: false,
      obesidad: false,
      neumonia: false,
      asma: false,
      artitris: false,
      gota: false,
      epilepsia: false,
      hipertension: false
    });

    const [inputs1, setInputs1] = useState([
      { key: "sintoma: " + 0, descripcion: '' },
    ]);

    const [activeInput, setActiveInput] = useState(null);

    // const [values, setValue] = useState([]);


    const handleInputChange1 = (index, newValue) => {
      const newInputs = [...inputs1];
      setConsulta(newValue);
      newInputs[index].descripcion = newValue;
      setInputs1(newInputs);
      console.log(inputs1);
    };

    const [consulta, setConsulta] = useState('');

    const Search = "Nombre";

    console.log(Pacientes)

    const resultadosDeBusqueda = consulta
  ? Sintomas.filter(paciente =>
      paciente[Search].toLowerCase().includes(consulta.toLowerCase())
    ).slice(0, 5)
  : [];
  
    const addInput = () => {
      if(inputs1.length < 5){
        setInputs1([...inputs1, { key: "sintoma: " + inputs1.length, descripcion: '' }]);
      }
    };

    // const onClick = () => {
    //   console.log(inputs1);
    //   diagnosticarEnfermedad();
    //   getDg(inputs1);
    // }

    const handleExternalSubmit = () => {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    };

    const handleSwitchChange = (name, isActive) => {
      setSwitchStates(prev => ({ ...prev, [name]: isActive }));
    };

    const navigate = useNavigate();

    const onSubmit = async (values) => {
      // const descripcionesString = inputs1.map(objeto => objeto.descripcion).join('||');
      const nombre = prompt("Nombre de el diagnostico");
      const descripciones = inputs1.map(objeto => objeto.descripcion);

      const combinedObj = {
        ...switchStates,
        nombre: nombre,
        descripciones: descripciones,
        ...values,
      };

      if(values.temperatura > 37.5){
        if(combinedObj.descripciones.includes("Fiebre") || combinedObj.descripciones.includes("fiebre")){         
        }
        else{
          combinedObj.descripciones.push("Fiebre");
        }
      }

      console.log(combinedObj)

//       console.log(combinedObj)

// // Ahora, descripciones es un array que contiene solo las descripciones de los objetos
//       console.log(descripciones);
//       console.log(inputs1);
      const response = await inserDiagnostic(combinedObj, id);

      if (response.status === 200) {
        navigate(`/ListP/${id}/${response.data}`);
      } else {
        alert("Error al diagnosticar al paciente");
      }  

      console.log(response);
      // registrarPacc(combinedObj);
      // getDg(inputs1);
    };
  
  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR TextN={"Diagnosticar paciente"}/>
        <Div1>
          <Aside1>
            <Switch textoSW1={"Diabetes"} id={"diabetes"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Obesidad"} id={"obesidad"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Neumonía"} id={"neumonia"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Asma"} id={"asma"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Atritis"} id={"artritis"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Gota"} id={"gota"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Epilepsia"} id={"epilepsia"} onChange={handleSwitchChange}></Switch>
            <Switch textoSW1={"Hipetersion"} id={"hipertension"} onChange={handleSwitchChange}></Switch>
          </Aside1>
          <Aside2>
          <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}
            >
              <P>Presión arterial</P>
              <Input type='text' placeholder='Presión arterial' {...register('presion', {required: false, pattern: /^[0-9.\s]+$/})} onChange={validarNumeros}></Input>
              <P>Pulso</P>
              <Input type='text' placeholder='Pulso' {...register('pulso', {required: false, pattern: /^[0-9.\s]+$/})} onChange={validarNumeros} ></Input>
              <P>Alergias</P>
              <Input type='text' placeholder='Alergias' {...register('alergias', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
              <P>Antecedentes</P>
              <Input type='text' placeholder='Antecedentes' {...register('antecedentes', {required: false, pattern: /^[0-9.\s]+$/})} onChange={validarNumeros}></Input>
              <P>Otros</P>
              <Input type='text' placeholder='Otros' {...register('otros', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios} ></Input>
              <P>Peso</P>
              <Input type='text' placeholder='Peso' {...register('peso', {required: false, pattern: /^[0-9.]+$/})} onChange={validarNumeros} ></Input>
              <P>Estatura</P>
              <Input type='text' placeholder='Estatura' {...register('estatura', {required: false, pattern: /^[0-9\s]+$/})} onChange={validarNumeros} ></Input>
              <P>Temperatura</P>
              <Input type='text' placeholder='Temperatura' {...register('temperatura', {required: false, pattern: /^[0-9.]+$/})} onChange={validarNumeros} ></Input>
            </Form>
          </Aside2>
          <Aside3>
            <Div3>
              <P>{"Sintoma(s)"}</P>
                {/* {inputs1.map((input1, index) => (
                  <div key={input1.key}>
                  <Input value={input1.value ? input1.value : values} onChange={(e) => handleInputChange1(index, e.target.value)} onFocus={() => setActiveInput(index)}/>
                  {activeInput === index && resultadosDeBusqueda.map(paciente => (
                        <Li key={input1.key}>
                          <p onClick={() => handleInputChange1(index, paciente[Search], setValue(paciente[Search]))}>{paciente[Search]}</p>
                        </Li>
                  ))}
                  </div>
                ))} */}

                {inputs1.map((input1, index) => (
                  <div key={input1.key}>
                    <Input 
                      value={input1.value ? input1.value : input1.descripcion} 
                      onChange={(e) => {handleInputChange1(index, e.target.value);
                      }} 
                      onFocus={() => setActiveInput(index)}
                    />
                    <Ul>
                      {activeInput === index && resultadosDeBusqueda.map(paciente => (
                        <Li key={index}>
                          <p onClick={() => {
                            handleInputChange1(index, paciente[Search])
                          }}>{paciente[Search]}</p>
                        </Li>
                      ))}
                    </Ul>
                  </div>
                ))}
              <ButtonMS onClick={addInput} srcNS={"/img/create.svg"}></ButtonMS>
            </Div3>
          </Aside3>
          <Div2>
            <Button onClick={handleExternalSubmit}>Diagnosticar</Button>
          </Div2>
        </Div1>
    </>
  )
}

export default Diagnostic

const Ul = styled.ul`
    position: absolute;
`

const Li = styled.li`
`

const Div3 = styled.div`
  margin-top:15px;
`

const Aside1 = styled.aside`
  width: 33%;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: column;
  max-height: 100px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 600px;
    order: 1;
    grid-template-rows: repeat(2, auto);
  }
`
const Aside2 = styled.aside`
  width: 33%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    order: 0;
  }
`

const Aside3 = styled.aside`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`

const Div1 = styled.div`
  width: calc(100vw - 256px);
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`
const Div2 = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    order: 3;
  }
`

const Button = styled.button`
    height: 52px;
    width: auto;
    border-radius: 8px;
    background-color: #000000;
    cursor: pointer;
    color: white;
    border: black;
    transition: ease-out 0.5s;
    padding: 14px 24px;

    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;

    &:hover {
      box-shadow: inset 0 -100px 0 0 gray;
    }

    &:active {
      transform: scale(0.9);
    }

    @media (max-width: 768px) {
      width: 90%;
    }
`

const Form = styled.form`
    width: 95%;
    text-align: left;
    margin-top: 10px;
    display: grid;
    grid-template-rows: repeat(8, auto);
    grid-auto-flow: column;
    grid-column-gap: 40px;
`
const P = styled.label`
    margin: 0px;
    margin-top: 5px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`

const Input = styled.input`
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;
`
