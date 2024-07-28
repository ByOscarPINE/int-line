import axios from "axios";

export const loginRequest = async (user) => 
  await axios.post("http://localhost:4000/login", user);

export const getPacientes = async () =>
  await axios.get(`http://localhost:4000/pacientes`);

export const registerPac = async (data) => 
  await axios.put("http://localhost:4000/registerPac", data);

export const insertDiag = async (data, id) =>
  await axios.put(`http://localhost:4000/insertDiagnostico/${id}`, data);

export const getDiagnostics = async (id) =>
  await axios.get(`http://localhost:4000/diagnosticos/${id}`);

export const getInfoDg = async (idpa, iddi) =>
  await axios.get(`http://localhost:4000/getInfoDg/${idpa}/${iddi}`);

export const getSitomas = async () =>
  await axios.get(`http://localhost:4000/getSintomas`);


export const createTaskRequest = async (task) =>
  await axios.post("https://backendint-line-production.up.railway.app/tasks", task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`https://backendint-line-production.up.railway.app/tasks/${id}`);

export const getDiagg = async(datos) => 
  await axios.post('https://backendint-line-production.up.railway.app/enfermedades', datos)

export const getUser = async (id) =>
  await axios.post(`http://localhost:4000/getUser/${id}`)