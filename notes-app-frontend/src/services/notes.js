import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = '/api/notes'

let token

export const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

export const getAllNotes = () => {
  const req = axios.get(`${baseUrl}`)
  return req.then((res) => res.data)
}

export const createNote = (noteObject) => {
  const config = {
    headers: {
      Authorization: token
    },
  }
  const req = axios.post(`${baseUrl}`, noteObject, config)
  return req.then((res) => res.data)
}

export const deleteNote = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(() => console.log('note deleted'))
}

export const updateNote = (id, noteObject) => {
  const req = axios.put(`${baseUrl}/${id}`, noteObject)
  return req.then((res) => res.data)
}