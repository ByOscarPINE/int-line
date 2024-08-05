import axios from "axios";

const URL = 'https://backendint-line-production.up.railway.app'

export const loginRequest = async (user) => 
  await axios.post(`${URL}/login`, user);

export const getPacientes = async () =>
  await axios.get(`${URL}/pacientes`);

export const registerPac = async (data) => 
  await axios.put(`${URL}/registerPac`, data);

export const insertDiag = async (data, id) =>
  await axios.put(`${URL}/insertDiagnostico/${id}`, data);

export const getDiagnostics = async (id) =>
  await axios.get(`${URL}/diagnosticos/${id}`);

export const getInfoDg = async (idpa, iddi) =>
  await axios.get(`${URL}/getInfoDg/${idpa}/${iddi}`);

export const getSitomas = async () =>
  await axios.get(`${URL}/getSintomas`);

export const getUser = async (id) =>
  await axios.post(`${URL}/getUser/${id}`)


export const createTaskRequest = async (task) =>
  await axios.post("https://backendint-line-production.up.railway.app/tasks", task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`https://backendint-line-production.up.railway.app/tasks/${id}`);

export const getDiagg = async(datos, id) => 
  await axios.post(`${URL}/enfermedad`, datos, id)
