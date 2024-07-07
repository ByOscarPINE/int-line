import axios from "axios";

export const getTaskRequest = async () =>
  await axios.get(`https://backendint-line-production.up.railway.app/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post("https://backendint-line-production.up.railway.app/tasks", task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`https://backendint-line-production.up.railway.app/tasks/${id}`);


export const loginRequest = async (user) => 
  await axios.post("https://backendint-line-production.up.railway.app/login", user);

export const registerPac = async (data) => 
  await axios.post("https://backendint-line-production.up.railway.app/registerPac", data);

export const getDiagnostics = async (id) =>
  await axios.get(`https://backendint-line-production.up.railway.app/diagnosticos/${id}`);

export const getDiagg = async(datos) => 
  await axios.post('https://backendint-line-production.up.railway.app/enfermedades', datos)

export const getUser = async (id) =>
  await axios.post(`https://backendint-line-production.up.railway.app/getUser/${id}`)