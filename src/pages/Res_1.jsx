import React, { useEffect } from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideOD from '../components/parts/AsideOD'
import styled from 'styled-components'
import AsideI from '../components/parts/AsideI'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import {jsPDF} from 'jspdf';

const Res_1 = () => {
  const {id} = useParams();
  const {idd} = useParams();

  const { InfoDg, getHisDg} = useTasks();

  if (id == InfoDg.ID_Paciente && idd == InfoDg.ID_Diagnostico_Paciente) {
  } else {
    useEffect (() => {
      try {
        getHisDg(id, idd);
        console.log('Loading Diagnostic');
      } catch (error) {
        console.log(error);
      }
    }, []); 
  }

  const generatePDF = () => {
    const doc = new jsPDF();

    // Establecer fuente y tamaño
    doc.setFont('helvetica');
    doc.setFontSize(16);

    // Añadir texto con estilos
    doc.setTextColor(0, 0, 255); // Color azul
    doc.text('Este es un ejemplo de PDF generado en React.', 10, 10);

    // Añadir más texto con diferentes estilos
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Color negro
    doc.text('Texto adicional con tamaño de fuente más pequeño.', 10, 20);

    // Añadir un rectángulo con color de fondo
    doc.setFillColor(255, 0, 0); // Color rojo
    doc.rect(10, 30, 50, 10, 'F'); // 'F' para fill (relleno)

    // Añadir texto sobre el rectángulo
    doc.setTextColor(255, 255, 255); // Color blanco
    doc.text('Texto sobre el rectángulo', 12, 37);

    // Guardar el PDF
    doc.save('ejemplo_con_estilos.pdf');
  };
  

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Home', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/${idd}`, TextNS: 'Diagnostico', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]


    if (InfoDg.length === 0) {
      return     <>
      <NavbarS NS={DatosNS}/>
      <TopbarR condition={{pathname: `/ListP/${id}` }} TextN={'Diagnostico '}/>
      <Div1>
        <Box>
          <p>cargando.....</p>
        </Box>
      </Div1>
    </>
    }


  return (
    <>
        <NavbarS NS={DatosNS}/>
        <TopbarR condition={{pathname: `/ListP/${id}` }} TextN={'Diagnostico '}/>
        <Div1>
          <Box>
            <AsideI />
            <AsideOD />
          </Box>
          <DownloadButton onClick={generatePDF}>Generar PDF</DownloadButton>
        </Div1>
    </>
  )
}

export default Res_1

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;

    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
      margin-bottom: 20px;
      }
`

const Box = styled.div`
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    margin: auto 25px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
`

const DownloadButton = styled.button`

  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
  }
`;