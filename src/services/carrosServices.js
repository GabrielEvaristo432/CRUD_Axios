import axios from 'axios'
import link from '../urlApi'

async function listarCarros() {
  const response = await axios.get(`${link}/carros`)
  return response
}

async function adicionarCarro(carro) {
  const response = await axios.post(`${link}/carros`, carro)
  return response
}

async function editarCarro(id, carro) {
  const response = await axios.put(`${link}/carros/${id}`, carro)
  return response
}

async function excluircarro(id) {
  const response = await axios.delete(`${link}/carros/${id}`)
  return response
}

const carrosServices = {
  listarCarros,
  adicionarCarro,
  editarCarro,
  excluircarro
}

export default carrosServices