import { createContext, useContext, useState } from "react";
import { getTaskRequest, loginRequest } from "../api/login.api";
import { deleteTaskRequest } from "../api/login.api";
import { createTaskRequest } from "../api/login.api";
import { registerPac } from "../api/login.api";
import { getDiagnostics, getDiagg } from "../api/login.api";
import { getUser } from "../api/login.api";

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

  const validarLetrasYEspacios = (event) => {
    const valorActual = event.target.value;
    // Verificar si el valor actual contiene algo que no sea letra o espacio
    if (/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]/.test(valorActual)) {
      // Eliminar cualquier carácter que no sea letra o espacio
      event.target.value = valorActual.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]/g, '');
    }
  };

  const validarPeso = (event) => {
    const valorActual = event.target.value;
    // Verificar si el valor actual contiene algo que no sea letra o espacio
    if (/[^0-9.\s]/.test(valorActual)) {
      // Eliminar cualquier carácter que no sea letra o espacio
      event.target.value = valorActual.replace(/[^0-9.\s]/g, '');
    }
  };
  

  const loadTasks = async () => {
    const response = await getTaskRequest();
    setPacientes(response.data);
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

  const login = async (user) => {
    try {
      console.log(user)
      const response = await loginRequest(user);
      const { token } = response.data;
      localStorage.setItem('token', token); // Guarda el token en localStorage
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
  

  const registrarPacc = async (data) => {
    try {
      console.log(data)
      await registerPac(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getDiag = async function (data) {
    try {
      const diag = await getDiagnostics(data)
      setDiagnostics(diag.data)
    } catch (error) {
      console.log(error)
    }
  }


  const getDg = async function (datos) {
    try {
      console.log(datos)
      const response = await getDiagg(datos);
      console.log(response)
    } catch (error) {
      
    }
  };

  const getPacienteInfo = async (id) => {
    try {
      const responsepac = await getUser(id);
      setDatosP(responsepac.data)
    } catch (error) {
      console.log(error)
    }
  }


  return <TaskContext.Provider value={{
    Pacientes, Diagnostics, DatosP, loadTasks, deleteTask, createTask, login, 
    registrarPacc, getDiag, getDg, validarLetrasYEspacios, validarPeso,
    getPacienteInfo
   }}>
            {children}
        </TaskContext.Provider>;
};
