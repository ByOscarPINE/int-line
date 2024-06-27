import axios from "axios";

export const getTaskRequest = async () =>
  await axios.get(`http://localhost:4000/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`http://localhost:4000/tasks/${id}`);


export const loginRequest = async (user) => 
  await axios.post("http://localhost:4000/login", user);

export const registerPac = async (data) => 
  await axios.post("http://localhost:4000/registerPac", data);

export const getDiagnostics = async (id) =>
  await axios.get(`http://localhost:4000/diagnosticos/${id}`);

export const getDiagg = async(datos) => 
  await axios.post('http://localhost:4000/enfermedades', datos)