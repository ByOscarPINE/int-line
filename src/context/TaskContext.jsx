import { createContext, useContext, useEffect, useState } from "react";
import { getInfoDg, getPacientes, getSitomas, insertDiag, loginRequest } from "../api/login.api";
import { deleteTaskRequest } from "../api/login.api";
import { createTaskRequest } from "../api/login.api";
import { registerPac } from "../api/login.api";
import { getDiagnostics, getDiagg } from "../api/login.api";
import { getUser } from "../api/login.api";
import { set } from "react-hook-form";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {

  const [Pacientes, setPacientes] = useState([]);

  const [Diagnostics, setDiagnostics] = useState([]);

  const [DatosP, setDatosP] = useState([]);

  const [InfoDg, setInfoDg] = useState([]);

  const [Sintomas, setSintomas] = useState([]);

  const [DiagID , setDiagID] = useState([]);

  const [Enfermedad , setEnfermedad] = useState([]);


  const clearDiagnostics = () => {
    setDiagnostics([]);
  };

  const validarLetrasYEspacios = (event) => {
    const valorActual = event.target.value;
    // Verificar si el valor actual contiene algo que no sea letra o espacio
    if (/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]/.test(valorActual)) {
      // Eliminar cualquier carácter que no sea letra o espacio
      event.target.value = valorActual.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]/g, '');
    }

    if (valorActual.trimStart() !== valorActual) {
      event.target.value = valorActual.trimStart();
    }
  };

  const validarNumeros = (event) => {
    const valorActual = event.target.value;
    // Verificar si el valor actual contiene algo que no sea número, punto o espacio
    if (/[^0-9.\s]/.test(valorActual)) {
      // Eliminar cualquier carácter que no sea número, punto o espacio
      event.target.value = valorActual.replace(/[^0-9.\s]/g, '');
    }
    // Si el valor actual está vacío o solo tiene espacios, o si el valor comienza con un espacio
    // pero ya tiene contenido, eliminar espacios al principio
    if (valorActual.trimStart() !== valorActual) {
      event.target.value = valorActual.trimStart();
    }
  };


  const login = async (user) => {
    try {
      console.log(user)
      const response = await loginRequest(user);
      const { token } = response.data;
      localStorage.setItem('token', token); // Guarda el token en localStorage
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const loadPacientes = async () => {
    try {
      const response = await getPacientes();
      setPacientes(response.data); 
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const registrarPacc = async (data) => {
    try {
      const response = await registerPac(data);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  const inserDiagnostic = async (data, id) => {
    try {
      console.log(data, id)
      const response = await insertDiag(data, id);
      return response;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  const getPacienteInfo = async (id) => {
    try {
      setDatosP([]);
      const responsepac = await getUser(id);
      setDatosP(responsepac.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getHisDg = async function (idpa, iddi) {
    try {
      setInfoDg([]);
      const response = await getInfoDg(idpa, iddi);
      setInfoDg(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const getSint = async function () {
    try {
      const response = await getSitomas();
      setSintomas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  //Carga los diagnosticos de un paciente
  const getDiag = async function (data) {
    try {
      setDiagnostics([]);
      const diag = await getDiagnostics(data)
      setDiagnostics(diag.data[0])
      setDiagID(diag.data[1][0].ID_Paciente)
    } catch (error) {
      console.log(error)
      setDiagnostics(error)
      setDiagID('0')
    }
  }
  



  const deleteTask = async (id) => {
    try {
        const respone = await deleteTaskRequest(id);
        console.log(respone);
        setPacientes(Pacientes.filter(paciente => paciente.id !== id));
    } catch (error) {
        console.log(error)
    }
  }

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      // setPacientes([...Pacientes, response.data]);
    } catch (error) {
      console.error(error);
    }
  }



  const getDg = async function (datos) {
    try {
      const response = await getDiagg(datos);
      setEnfermedad(response.data)
    } catch (error) {
      
    }
  };

  return <TaskContext.Provider value={{
    Pacientes, Diagnostics, DatosP, InfoDg, Sintomas, DiagID,  clearDiagnostics, loadPacientes, deleteTask, createTask, login, 
    registrarPacc, getDiag, getDg, validarLetrasYEspacios, validarNumeros,
    getPacienteInfo, inserDiagnostic, getHisDg, getSint
   }}>
            {children}
        </TaskContext.Provider>;
};
