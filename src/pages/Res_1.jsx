import React, { useEffect } from 'react'
import TopbarR from '../components/parts/TopbarR'
import NavbarS from '../components/parts/NavbarS'
import AsideOD from '../components/parts/AsideOD'
import styled from 'styled-components'
import AsideI from '../components/parts/AsideI'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import {jsPDF} from 'jspdf';
import { get } from 'react-hook-form'

const Res_1 = () => {
  const {id} = useParams();
  const {idd} = useParams();

  const { InfoDg, getHisDg, getDg} = useTasks();

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

// const interFontBase64RegularSemiBold = 'data:font/ttf;base64,...';

// //   const generatePDF = () => {
// //     const doc = new jsPDF();
// //     const pageWidth = doc.internal.pageSize.getWidth();
// //     const pageHeight = doc.internal.pageSize.getHeight();

// //     // Registrar la tipografía "Inter" regular e itálica
// //     doc.addFileToVFS('Inter-Regular.ttf', interFontBase64RegularSemiBold);
// //     doc.addFont('Inter-Regular.ttf', 'Inter', 'Semibold');

// //     doc.setFont('Inter', 'Semibold');
// //     doc.text('LIFELINE', 10, 10);
// //     doc.save('ejemplo_con_inter.pdf');
// //   };


//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const pageHeight = doc.internal.pageSize.getHeight();
  
//     // Función para añadir texto centrado
//     const addCenteredText = (text, y, fontSize = 12, color = [0, 0, 0]) => {
//       doc.setFontSize(fontSize);
//       doc.setTextColor(...color);
//       const textWidth = doc.getTextWidth(text);
//       const x = (pageWidth - textWidth) / 2 ;
//       doc.text(text, x, y);
//     };
  
//     // Función para añadir un rectángulo centrado con bordes redondeados
//     const addCenteredRoundedRect = (y, width, pos, height, borderRadius, fillColor = [255, 255, 255]) => {
//       const x = ((pageWidth - width) / 4) * pos;
//       doc.setFillColor(...fillColor);
//       doc.roundedRect(x, y, width, height, borderRadius, borderRadius); // 'F' para fill (relleno)
//     };

//     // doc.addFileToVFS('Inter-Regular.ttf', interFontBase64RegularSemiBold);
//     doc.addFont('Inter-Regular.ttf', 'Inter', 'Semibold');
  
//     // Añadir texto centrado
//     doc.setFont('Inter', 'Semibold');
//     addCenteredText('LIFELINE', 20, 16, [0, 0, 0]);
  
//     // Añadir un rectángulo centrado con bordes redondeados
//     addCenteredRoundedRect(40, 50, 1, 10, 3, [255, 0, 0]);
//     addCenteredRoundedRect(40, 50, 3, 10, 3, [255, 0, 0]);
  
//     // Añadir texto centrado sobre el rectángulo
//     addCenteredText('Texto sobre el rectángulo', 50, 12, [255, 255, 255]);
  
//     // Guardar el PDF
//     doc.save('ejemplo_con_estilos.pdf');
//   };
  

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
          {/* <DownloadButton onClick={generatePDF}>Generar PDF</DownloadButton> */}
        </Div1>
    </>
  )
}

export default Res_1

const Div1 = styled.div`
    width: calc(100vw - 256px);
    margin-left: auto;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
      margin-bottom: 20px;
      }
`

const Box = styled.div`
    display: flex;
    gap: 24px;
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