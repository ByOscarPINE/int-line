import React from "react";
import Footer from "../components/parts/Footer.jsx";
import NavbarP from "../components/parts/NavbarP.jsx";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext.jsx";
import Cookie from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import NavbarPM from "../components/parts/NavbarPM.jsx";

const Login = () => {

  const {login} = useTasks();  
  const navigate = useNavigate();
  const token = Cookies.get('token');

    if (token) {
      // Si no hay token en las cookies, redirige al usuario al login
      return <Navigate to="/ListH" />;
    }


  return (
    <>
      <NavbarP />
      <NavbarPM DatosPM={DatosPM}/>
      <Div1>
        <AsideL>
          <H1>Iniciar sesión</H1>
          <Div2>
            <Formik
              initialValues={{ 
                email: "", 
                password: "" 
            }}
              onSubmit={async (values, actions) => {
                console.log(values);
                // validacion de datos
                const validateFields = () => {
                  const { email, password } = values;
                  if (!email.trim() || !password.trim()) {
                    console.log("Por favor, rellena todos los campos.");
                    return false; // Indica que la validación falló
                  } else {
                    console.log("Todos los campos están llenos.");
                    return true; // Indica que la validación fue exitosa
                  }
                };


                if(validateFields()) {
                  const response = await login(values);
                  actions.resetForm();
                  if (response && response.token) {
                    console.log("Inicio de sesión exitoso, token guardado.");
                    // const decodedToken = jwtDecode(response.token);
                    // console.log( decodedToken)
                    Cookie.set('token', response.token, { expires: 1 });// Expira en 7 días
                    // Aquí puedes redirigir al usuario a la página principal o donde corresponda
                    navigate('/ListH');
                  } else {
                    console.log("No hay token, posible error en el inicio de sesión.");
                    // Manejar el caso de que no se reciba token
                  }
                }
              }}
            >
              {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                  <P>Correo electrónico</P>
                  <Input 
                    name="email" 
                    type="email"
                    placeholder="example@domain.com"
                    onChange={handleChange}
                    value={values.email}
                    />
                  <P>Contraseña</P>
                  <Input 
                    name="password" 
                    type="password"
                    placeholder="example123"
                    onChange={handleChange}
                    value={values.password}
                    />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cargando..." : <P1>Iniciar sesión</P1>}
                  </Button>
                </Form>
              )}
            </Formik>
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
  border: 1.5px solid #e0e0e0;
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