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
    const {Pacientes, inserDiagnostic ,getDiag, validarLetrasYEspacios, validarNumeros, getDg, getSint, Sintomas} = useTasks();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
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
      atritis: false,
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
    };

    const [consulta, setConsulta] = useState('');

    const Search = "Nombre";

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

      if(values.neumonia === true){
        if(combinedObj.descripciones.includes("Neumonia") || combinedObj.descripciones.includes("neumonía")){         
        }
        else{
          combinedObj.descripciones.push("Neumonia");
        }
      }

      // if (values.presion > 140 || values.presion < 90) {
      //   if(combinedObj.descripciones.includes("Hipertensión") || combinedObj.descripciones.includes("hipertensión")){         
      //   }
      //   else{
      //     combinedObj.descripciones.push("Hipertensión");
      //   }


      // if (values.pulso > 100 || values.pulso < 60) {
      //   if(combinedObj.descripciones.includes("Taquicardia") || combinedObj.descripciones.includes("taquicardia")){         
      //   }
      //   else{
      //     combinedObj.descripciones.push("Taquicardia");
      //   }
      // }

      // if (values.peso > 100) {
      //   if(combinedObj.descripciones.includes("Obesidad") || combinedObj.descripciones.includes("obesidad")){         
      //   }
      //   else{
      //     combinedObj.obesidad = true;
      //     combinedObj.descripciones.push("Obesidad");
      //   }
      // }

      // if (values.peso < 50) {
      //   if(combinedObj.descripciones.includes("Bajo peso") || combinedObj.descripciones.includes("bajo peso")){         
      //   }
      //   else{
      //     combinedObj.descripciones.push("Bajo peso");
      //   }
      // }
      
//     console.log(combinedObj)

// // Ahora, descripciones es un array que contiene solo las descripciones de los objetos
//       console.log(descripciones);
//       console.log(inputs1);
      const response = await inserDiagnostic(combinedObj, id);
      console.log(combinedObj.descripciones);
      
      getDg(combinedObj.descripciones);

      if (response.status === 200) {
        getDiag(id);
        navigate(`/ListP/${id}/${response.data}`);
      } else {
        alert("Error al diagnosticar al paciente");
      }  

      console.log(response);
      // registrarPacc(combinedObj);
      // getDg(inputs1);
    };

    const [fpa, setFpa] = useState(false);
    const validarPresionArterial = (event) => {
      const value = event.target.value;
      const regex = /^[0-9]+\s*\/\s*[0-9]+$/;
      if (!regex.test(value)) {
        // Manejar el error de validación
        console.error("Formato inválido. Use el formato '23 / 45'.");
        setFpa(true);
      }
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
              <Input type='text' placeholder='Presión arterial'   {...register('presion', { required: false, pattern: /^[0-9]+\s*\/\s*[0-9]+$/ })}  onChange={validarPresionArterial}></Input>
              <P>Pulso</P>
              <Input type='text' placeholder='Pulso' {...register('pulso', {required: false, pattern: /^[0-9.\s]+$/})} onChange={validarNumeros} ></Input>
              <P>Alergias</P>
              <Input type='text' placeholder='Alergias' {...register('alergias', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
              <P>Antecedentes</P>
              <Input type='text' placeholder='Antecedentes' {...register('antecedentes', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios}></Input>
              <P>Otros</P>
              <Input type='text' placeholder='Otros' {...register('otros', {required: false, pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ.\s]+$/})} onChange={validarLetrasYEspacios} ></Input>
              <P>Peso</P>
              <Input type='text' placeholder='Peso (kg)' {...register('peso', {required: false, pattern: /^[0-9.]+$/})} onChange={validarNumeros} ></Input>
              <P>Estatura</P>
              <Input type='text' placeholder='Estatura (cm)' {...register('estatura', {required: false, pattern: /^[0-9\s]+$/})} onChange={validarNumeros} ></Input>
              <P>Temperatura</P>
              <Input type='text' placeholder='Temperatura ' {...register('temperatura', {required: false, pattern: /^[0-9.]+$/})} onChange={validarNumeros} ></Input>
            </Form>
          </Aside2>
          <Aside3>
            <Div3>
              <P>{"Sintoma(s)"}</P>
                {inputs1.map((input1, index) => (
                  <List key={input1.key}>
                    <Input2 
                      value={input1.value ? input1.value : input1.descripcion} 
                      onChange={(e) => {handleInputChange1(index, e.target.value);
                      }} 
                      onFocus={() => setActiveInput(index)}
                    />
                    <Ul>
                      {activeInput === index && resultadosDeBusqueda.map((paciente, index1) => (
                        <Li key={index1}  onMouseDown={(e) => e.preventDefault()}>
                          <P1 onClick={() => {
                            handleInputChange1(index, paciente[Search])
                          }}>{paciente[Search]}</P1>
                        </Li>
                      ))}
                    </Ul>
                  </List>
                ))}
              <ButtonMS onClick={addInput} srcNS={"/img/create.svg"}></ButtonMS>
            </Div3>
          </Aside3>
          <Div2>
            <Button onClick={handleExternalSubmit} disabled={isSubmitting}>{isSubmitting ? "Diagnosticando..." : "Diagnosticar"}</Button>
          </Div2>
        </Div1>
    </>
  )
}

export default Diagnostic

const P1 = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #828282;
    cursor: pointer;
`

const List = styled.div`
`

const Ul = styled.ul`
    display: none;
    position: absolute;
    padding: 0px;
    max-width: 170px;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    width: 100%;
    gap: 5px;
`

const Input = styled.input`
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;

`

const Input2 = styled.input`
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    margin-top: 15px;

    &:focus + ${Ul} {
    display: flex;
    }
`

const Li = styled.li`
    width: calc(100% - 5px);
    list-style-type: none;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    background-color: #F9F9F9;
`

const Div3 = styled.div`
  margin-top:15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 20px;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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
    text-align: left;
    margin-top: 10px;
    display: grid;
    grid-template-rows: repeat(8, auto);
    grid-auto-flow: column;
    grid-column-gap: 40px;

    @media (max-width: 768px) {
      width: 90%;
      grid-template-rows: repeat(8, auto);
      grid-auto-flow: row;
      grid-row-gap: 5px;
    }
`
const P = styled.label`
    margin: 0px;
    margin-top: 5px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
`