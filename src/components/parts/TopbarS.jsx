import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD.jsx'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';

const TopbarS = ({condition, Datos, Search, pageType}) => {
    const {id} = useParams();

const [consulta, setConsulta] = useState('');
const token = Cookies.get('token');
const [clicked, setClicked] = useState(false);

const decodedToken = jwtDecode(token);

const handleChange = event => {
    setConsulta(event.target.value);
    console.log(consulta)
};

const resultadosDeBusqueda = consulta
  ? Datos.filter(paciente =>
      paciente[Search].toLowerCase().includes(consulta.toLowerCase())
    )
  : [];


  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = (event) => {
    event.preventDefault();
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <Div1>
        <Link to={condition ? `/ListP/${id}` : "#"} onClick={condition ? undefined : handleGoBack}>
            <Img1 src='/img/Back.svg'/>
        </Link>
        <Div2>
            <H1>Buscador</H1>
            <Div3>
                <List >
                <Input value={consulta} onChange={handleChange}/>
                    <Ul>
                    {resultadosDeBusqueda.map((paciente, index) => (
                        <Li key={index}>
                        <Link1
                            to={
                            pageType === 'ListH'
                                ? `/ListP/${paciente.id_paciente}`
                                : `/ListP/${id}/${paciente.ID_Diagnostico_Paciente}`
                            }
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <P2>{paciente[Search]} {paciente.apellido_materno} {paciente.nombres}</P2>
                        </Link1>
                        </Li>
                    ))}
                    </Ul>
                </List>
                <ButtonF><Img src='/img/FiltroImg.png'/><P>Filtro</P></ButtonF>
            </Div3>
        </Div2>
        <Div4>
            <H2>{`¡Bienvenido ${decodedToken.nombre}!`}</H2>
            <ButtonLD textLD={"Cerrar Sesion"} LDref={"/"}></ButtonLD>
        </Div4>
    </Div1>
  )
}

const Ul = styled.ul`
    display: none;
    position: absolute;
    background-color: #F9F9F9;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    margin-top: 45px;
    padding: 0px 50px;
`

const List = styled.div`
    width: 405px;
    margin-left: 48px;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`

const Li = styled.li`
    list-style-type: none;
`;

const Link1 = styled(Link)`
    text-decoration: none;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    
    
    &:focus + ${Ul} {
    display: block;
    }
`

const P2 = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #828282;
`

const Div1 = styled.div`
    height: 134px;
    width: calc(100vw - 256px);
    display: flex;
    margin-left: 256px;
    align-items: center;
    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100vw;
        height: 100px;
        align-items: center;
    }
`

const Div2 = styled.div`
    width: 50%;
    height: 134px;
    display: flex;
    flex-direction: column;
    text-align: left;
    @media (max-width: 768px) {
        margin-left: 15px;
        height: auto;
    }
`

const Div3 = styled.div`
    display: flex;
    gap: 16px;
`

const Div4 = styled.div`
    margin-top: 39px;
    margin-left: auto;
    margin-right: 60px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
    DISPLAY: NONE;
    }
`
const H1 = styled.h1`
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    margin-left: 48px;
    margin-top: 24px;

    @media (max-width: 768px) {
        margin-left: 0px;
        font-size: 16px;
    }
`

const H2 = styled.h1`
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    margin-left: 48px;
    margin-top: 24px;

    @media (max-width: 768px) {
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 16px;
    }
`

const ButtonF = styled.button`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
    height: 43px;

    @media (max-width: 768px) {
        display: none;
    }
`

const Img = styled.img`
    width: 24px;
    @media (max-width: 768px) {
        
    }
`

const Img1 = styled.img`
    display: none;
    @media (min-width: 768px) {
        display: none;
    }
`

const P = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #828282;

    @media (max-width: 768px) {
        display: none;
    }
`

export default TopbarS