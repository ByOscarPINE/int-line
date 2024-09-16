import { createContext, useContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {

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
    if (/[^0-9.\s]/.test(valorActual)) {
      event.target.value = valorActual.replace(/[^0-9.\s]/g, '');
    }
    if (valorActual.trimStart() !== valorActual) {
      event.target.value = valorActual.trimStart();
    }
  };

  const validarpassword = (event) => {
    const valorActual = event.target.value;

    if (/[^A-Za-z0-9?/@#!%$&]/.test(valorActual)) {
      event.target.value = valorActual.replace(/[^A-Za-z0-9?/@#!%$&]/g, '');
    }
  }

  const validaremail = (event) => {
    const valorActual = event.target.value;

    if (/[^A-Za-z0-9@.]/.test(valorActual)) {
      event.target.value = valorActual.replace(/[^A-Za-z0-9@.]/g, '');
    }
  };

  const register = async (user) => {
    try {
      const response = await registerRequest(user);
      return console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      const { token } = response.data;
      localStorage.setItem('token', token); // Guarda el token en localStorage
      return response.data;
    } catch (error) {
      return error;
    }
  }


  return <TaskContext.Provider value={{
    login, 
    validarLetrasYEspacios, validarNumeros, validaremail, validarpassword,
   }}>
            {children}
        </TaskContext.Provider>;
};
