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
      } catch (error) {
        console.log(error);
      }
    }, []); 
  }

  const fecha = InfoDg.Fecha && InfoDg.Fecha.split('T')[0] ? InfoDg.Fecha.split('T')[0] : 'No hay fecha';
  const fecha_nacimiento = InfoDg.fecha_nacimiento && InfoDg.fecha_nacimiento.split('T')[0] ? InfoDg.fecha_nacimiento.split('T')[0] : 'No hay fecha';
  const hoy = new Date();
  const fechaNac = new Date(InfoDg.fecha_nacimiento);
  let Edad = hoy.getFullYear() - fechaNac.getFullYear();

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 530] // Ancho: 210 mm, Alto: 400 mm
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    // Función para añadir texto centrado
    const addCenteredText = (text, y, fontSize = 12, color = [0, 0, 0]) => {
      doc.setFontSize(fontSize);
      doc.setTextColor(...color);
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2 ;
      doc.text(text, x, y);
    };

    const adText = (text, pos, y, fontSize = 12, color = [0, 0, 0]) => {
      doc.setFontSize(fontSize);
      doc.setTextColor(...color);
      const textWidth = doc.getTextWidth(text);
      const x = ((pageWidth - textWidth) / 4) * pos;
      doc.text(text, x, y);
    };
  
    // Función para añadir un rectángulo centrado con bordes redondeados
    const addCenteredRoundedRect = (y, width, pos, height, borderRadius, lineWidth = 2, borderColor = [0, 0, 0]) => {
      const x = ((doc.internal.pageSize.getWidth() - width) / 4) * pos;
      doc.setLineWidth(lineWidth);
      doc.setDrawColor(...borderColor);
      doc.roundedRect(x, y, width, height, borderRadius, borderRadius, 'S'); // 'S' para stroke (trazo)
    };
  
    // Añadir texto centrado
    doc.setFont('helvetica', 'bold');
    addCenteredText('LIFELINE', 15, 20, [0, 0, 0]);

    // doc.setFont('helvetica', 'normal');
    doc.setFont('helvetica', 'bold');
    addCenteredText('Hoja de Diagnostico', 25, 16, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Fecha:', 3, 37, 10, [0, 0, 0]);
    addCenteredRoundedRect(40, 50, 3, 10, 2, 0.8,[224, 224, 224]);
    adText(fecha, 3, 46, 10, [0, 0, 0]);
    // // Añadir un rectángulo centrado con bordes redondeados
    // addCenteredRoundedRect(40, 50, 1, 10, 3, [255, 0, 0]);

    doc.setFont('helvetica', 'normal');
    addCenteredText('DATOS GENERALES DEL PACIENTE:', 60, 12, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Nombre:', 1, 67, 10, [0, 0, 0]);
    addCenteredRoundedRect(70, 50, 1, 10, 2,  0.8,[224, 224, 224]);
    adText(`${InfoDg.nombres}`, 1, 76, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Apellido Paterno:', 1, 87, 10, [0, 0, 0]);
    addCenteredRoundedRect(90, 50, 1, 10, 2, 0.8,[224, 224, 224]);
    adText(`${InfoDg.apellido_paterno}`, 1, 96, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Apellido Materno:', 1, 107, 10, [0, 0, 0]);
    addCenteredRoundedRect(110, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.apellido_materno}`, 1, 116, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Edad:', 3, 67, 10, [0, 0, 0]);
    addCenteredRoundedRect(70, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${Edad}`, 3, 76, 10, [0, 0, 0]);
    

    doc.setFont('helvetica', 'normal');
    adText('Fecha de nacimiento:', 3, 87, 10, [0, 0, 0]);
    addCenteredRoundedRect(90, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${fecha_nacimiento}`, 3, 96, 10, [0, 0, 0]);


    doc.setFont('helvetica', 'normal');
    addCenteredText('LUGAR DE NACIMIENTO DEL PACIENTE:' , 130, 12, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Estado de nacimiento:', 1, 137, 10, [0, 0, 0]);
    addCenteredRoundedRect(140, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.estado_nacimiento}`, 1, 146, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Municipio:', 1, 157, 10, [0, 0, 0]);
    addCenteredRoundedRect(160, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.municipio_nacimiento}`, 1, 166, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Localidad:', 1, 177, 10, [0, 0, 0]);
    addCenteredRoundedRect(180, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.localidad}`, 1, 186, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Agencia:', 3, 137, 10, [0, 0, 0]);
    addCenteredRoundedRect(140, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.agencia}`, 3, 146, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Barrio:', 3, 157, 10, [0, 0, 0]);
    addCenteredRoundedRect(160, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.barrio}`, 3, 166, 10, [0, 0, 0]);


    doc.setFont('helvetica', 'normal');
    addCenteredText('DATOS ESPECIFICOS DEL PACIENTE:', 200, 12, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Peso:', 1, 207, 10, [0, 0, 0]);
    addCenteredRoundedRect(210, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Peso} kg`, 1, 216, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Pulso:', 1, 227, 10, [0, 0, 0]);
    addCenteredRoundedRect(230, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Pulso}`, 1, 236, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Alergias:', 1, 247, 10, [0, 0, 0]);
    addCenteredRoundedRect(250, 50, 1, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Alergias}`, 1, 256, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Estatura:', 3, 207, 10, [0, 0, 0]);
    addCenteredRoundedRect(210, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Estatura} cm`, 3, 216, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Presion Arterial:', 3, 227, 10, [0, 0, 0]);
    addCenteredRoundedRect(230, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Presion_Arterial}`, 3, 236, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Temperatura:', 3, 247, 10, [0, 0, 0]);
    addCenteredRoundedRect(250, 50, 3, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Temperatura}`, 3, 256, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Otros:', 1, 267, 10, [0, 0, 0]);
    addCenteredRoundedRect(270, 130, 2, 20, 2, 0.8, [224, 224, 224]);
    adText(`${(InfoDg.Diabetes === 1) ? 'Diabetes' : ''} ${(InfoDg.Hipertension === 1) ? 'Hipertension' : ''} ${(InfoDg.Cardiopatias === 1) ? 'Cardiopatias' : ''} ${(InfoDg.Obesidad === 1) ? 'Obesidad' : ''} ${(InfoDg.Cancer === 1) ? 'Cancer' : ''} ${(InfoDg.Otros === 1) ? 'Otros' : ''}`, 1, 276, 10, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    addCenteredText('SINTOMAS QUE PRESENTA EL PACIENTE:', 300, 12, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Sintomas:', 1, 307, 10, [0, 0, 0]);
    addCenteredRoundedRect(310, 130, 2, 30, 2, 0.8, [224, 224, 224]);
    doc.setFontSize(10);
    doc.text(`
    ${(InfoDg.Sintoma_1 !== '' || InfoDg.Sintoma_1 !== null) && InfoDg.Sintoma_1} 
    ${(InfoDg.Sintoma_2 !== null) && InfoDg.Sintoma_2} 
    ${(InfoDg.Sintoma_3 !== null) ? InfoDg.Sintoma_3 : ''} 
    ${(InfoDg.Sintoma_4 !== null) ? InfoDg.Sintoma_4 : ''} 
    ${(InfoDg.Sintoma_5 !== null)? InfoDg.Sintoma_5 : ''} 
    ${(InfoDg.Sintoma_6 !== null) ? InfoDg.Sintoma_6 : ''} 
    ${(InfoDg.Sintoma_7 !== null) ? InfoDg.Sintoma_7 : ''} 
    ${(InfoDg.Sintoma_8 !== null) ? InfoDg.Sintoma_8 : ''} 
    ${(InfoDg.Sintoma_9 !== null) ? InfoDg.Sintoma_9 : ''}`, 40, 310);

    doc.setFont('helvetica', 'normal');
    addCenteredText('DIAGNOSTICO DE LIFELINE:', 350, 12, [0, 0, 0]);


    doc.setFont('helvetica', 'normal');
    adText('Diangostico:', 1, 357, 10, [0, 0, 0]);
    addCenteredRoundedRect(360, 130, 2, 10, 2, 0.8, [224, 224, 224]);
    adText(`${InfoDg.Enfermedad}`, 1, 366, 10, [0, 0, 0]);


    doc.setFont('helvetica', 'normal');
    addCenteredText('MEDICACION RECOMENDADA:', 380, 12, [0, 0, 0]);

    doc.setFont('helvetica', 'normal');
    adText('Medicacion:', 1, 385, 10, [0, 0, 0]);
    addCenteredRoundedRect(388, 130, 2, 75, 2, 0.8, [224, 224, 224]);
    doc.setFontSize(10);
    const tratamientos = InfoDg.Tratamiento.map(
      (Tratamiento) => `${Tratamiento.Nombre}: ${Tratamiento.Descripcion}`
    ).join('\n');
    const lineas = doc.splitTextToSize(tratamientos, 120);
    doc.text(lineas, 45, 395);

    doc.setFont('helvetica', 'normal');
    adText('NOTA:', 1, 472, 10, [0, 0, 0]);
    addCenteredRoundedRect(475, 130, 2, 40, 2, 0.8, [224, 224, 224]);


    doc.setFont('helvetica', 'normal');
    addCenteredText('Este documento no posee una validez oficial, ni se autoriza el uso ajeno a la política asi como términos y condiciones  de Lifeline.', 528, 8, [128, 128, 128]);



    const img = new Image();
    img.src = '/img/Logo.png'; // Ruta de la imagen
    img.onload = () => {
      doc.addImage(img, 'PNG', 170, 5, 40, 25); // (imagen, formato, x, y, ancho, alto)
      // Guardar el PDF
      doc.save(`${InfoDg.nombres} ${InfoDg.apellido_paterno} ${InfoDg.apellido_materno} ${hoy} Diagnostico.pdf`);
    };
  };
  

    const DatosNS = [
        { toNS: '/ListH', TextNS: 'Inicio', srcNS: '/img/home.svg'},
        { toNS: `/ListP/${id}`, TextNS: 'Buscar', srcNS: '/img/search.svg'},
        { toNS: `/ListP/${id}/${idd}`, TextNS: 'Diagnostico', srcNS: '/img/create.svg', backgroundColor: '#F2F2F2'},
    ]


    if (InfoDg.length === 0) {
      return     <>
      <NavbarS NS={DatosNS}/>
      <TopbarR condition={{pathname: `/ListP/${id}` }} TextN={'Diagnostico '}/>
      <Div1>
        <Box>
          <Div2>
            <PI>cargando.....</PI>
          </Div2>
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
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-left: 0px;
      width: 100%;
      margin-bottom: 20px;
      }
`

const Div2 = styled.div`
    width: calc(100vw - 256px);
    text-align: center;
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
    transition: 0.5s;
    background-color: gray;
  }

  @media (max-width: 768px) {
  }
`;

const PI = styled.p`
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    margin: 24px;
    color: #828282;
`