import React from 'react'
import styled from 'styled-components'
import ButtonLD from '../buttons/ButtonLD.jsx'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useTasks } from '../../context/TaskContext.jsx';

const TopbarR = ({condition, TextN}) => {
  const {id} = useParams();
  const { DatosP} = useTasks();

  const token = Cookies.get('token');

  const decodedToken = jwtDecode(token);


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
        <Div2>
        <StyledLink to={condition ? `/ListP/${id}` : "#"} onClick={condition ? undefined : handleGoBack}>
        <Img loading='lazy' src='/img/Back.svg' alt='Back'/>
      </StyledLink>
            <H1>{TextN}</H1>
            <Div3>
              <H2>{`¡Bienvenido ${decodedToken.nombre}!`}</H2>
              <ButtonLD textLD={"Cerrar Sesión"} LDref={"/"}></ButtonLD>
            </Div3>
        </Div2>
    </Div1>
  )
}

export default TopbarR


const Div1 = styled.div`
    height: 134px;
    width: calc(100vw - 256px);
    display: flex;
    margin-left: 256px;

    @media (max-width: 768px) {
        margin-left: 0px;
        width: 100%;
        height: 100px;
    }
`

const Div2 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;

    @media (max-width: 768px) {
      margin: 0 20px;
      gap: 20px;
      justify-content: center;
    }
`

const H1 = styled.h1`
    font-size: 25px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`

const H2 = styled.h1`
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
`

const Img = styled.img`
    width: 40px;
    @media (max-width: 768px) {
      width: 30px;
    }
`

const Div3 = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
    display: none;
    }
`

const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    margin-right: auto;
    display: flex;
    align-items: center;
  }
`;