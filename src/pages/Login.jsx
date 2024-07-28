import React, { useState } from "react";
import Footer from "../components/parts/Footer.jsx";
import NavbarP from "../components/parts/NavbarP.jsx";
import styled from "styled-components";
import { useTasks } from "../context/TaskContext.jsx";
import Cookie from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import NavbarPM from "../components/parts/NavbarPM.jsx";
import { set, useForm } from "react-hook-form";

const Login = () => {

  const {login} = useTasks();  
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
  const [isPasswordVoid, setIsPasswordVoid] = useState(false);
  const [isEmailVoid, setIsEmailVoid] = useState(false);

    if (token) {
      // Si no hay token en las cookies, redirige al usuario al login
      return <Navigate to="/ListH" />;
    }

    const { register, handleSubmit, reset, resetField, formState: { isSubmitting }, setError, clearErrors } = useForm({
      defaultValues: {
        email: "",
        password: ""
      }
    });
  
    const onSubmit = async (values) => {
      setIsEmailIncorrect(false);
      setIsPasswordIncorrect(false);
      console.log(values);
      // validacion de datos
      const validateFields = () => {
        const { email, password } = values;
        if (!email.trim() || !password.trim()) {
          console.log("Por favor, rellena todos los campos.");
          return false; // Indica que la validación falló
        } else {
          return true;
        }
      };
  
      if(validateFields()) {
        const response = await login(values);
        if (response && response.token) {
          console.log("Inicio de sesión exitoso, token guardado.");
          Cookie.set('token', response.token, { expires: 1 });
          navigate('/ListH');
        } else {
          if (response.response.data === 'email') {
            setIsEmailIncorrect(true);
            reset({ ...values, email: "", password: "" });
          }
          if (response.response.data === 'contrasennia') {
            // alert("Contraseña incorrecta");
            setIsPasswordIncorrect(true);
            resetField('password');
          }
          console.log("No hay token, posible error en el inicio de sesión.");
        }
      }
    };


  return (
    <>
      <NavbarP />
      <NavbarPM DatosPM={DatosPM}/>
      <Div1>
        <AsideL>
          <H1>Iniciar sesión</H1>
          <Div2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <P>Correo electrónico</P>
              <Input 
                name="email" 
                type="email"
                placeholder="example@domain.com"
                {...register('email', {required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}
                isError={isEmailIncorrect}
              />
              {isEmailIncorrect && <p>El correo electrónico no se encontro</p>}
              <P>Contraseña</P>
              <Input 
                name="password" 
                type="password"
                placeholder="example123"
                {...register('password', {required: true})}
                isError={isPasswordIncorrect}
              />
              {isPasswordIncorrect && <p>La contraseña es incorrecta</p>}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Cargando..." : "Iniciar sesión"}
              </Button>
            </form>
          </Div2>
        </AsideL>
        <AsideR>
          <Img src="/img/LoginImg.svg"></Img>
        </AsideR>
      </Div1>
      <Footer />
    </>
  );
};

const DatosPM = [
  { toPM: '/', srcPM: '/img/homepm.svg'},
  { toPM: '/about', srcPM: '/img/create.svg'},
  { toPM: '/login', srcPM: '/img/profile.svg'},
]


const P1 = styled.p`
  margin: 0px;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 500;
`;

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

  &:hover {
    box-shadow: inset 0 -100px 0 0 gray;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Div1 = styled.div`
  margin-top: 164px;
  height: 100vh;
  width: 100%;
  display: flex;

  @media (max-width: 767px) {
  margin-top: 0px;
  height: 50vh;
  }
`;

const AsideL = styled.aside`
  width: 50%;
  margin-top: 88px;
  margin-left: 80px;

  @media (max-width: 767px) {
  width: calc(100vw - 160px);
  margin-top: 0px;
  }
`;

const H1 = styled.h1`
  text-align: left;
  width: 624px;
  margin-bottom: 0px;
  font-size: 64px;
  font-family: "Inter", sans-serif;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 35px;
    width: 100%;
  }
`;

const Div2 = styled.div`

  @media (min-width: 767px) {
    margin-top: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 624px;
  }
`;

const P = styled.p`
  text-align: left;
  width: 624px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 500;

  @media (max-width: 767px) {
    width: calc(100vw - 160px);
  }
`;

const Input = styled.input`
  height: 48px;
  width: 626px;
  border-radius: 8px;
  border: 2px solid ${props => (props.isError ? 'red' : '#e0e0e0')};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  
  @media (max-width: 767px) {
    width: calc(100vw - 160px);
  }
`;

const AsideR = styled.aside`
  margin-top: 88px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Img = styled.img`
  border-radius: 8px;
  width: 508px;
`;

export default Login;