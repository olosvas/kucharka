import axios from 'axios'
const baseUrl = 'https://unicorn-cook-book-19.herokuapp.com/recipe'

let token = "dsfsfsdfvcgsdaggg"



const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const create = (newObject) => {

  const config = {
    headers: { Authorization: token },
  }

  const request = axios.post(baseUrl, newObject, config)

  return request.then(response => response.data)
}


const deleteRecipe = (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.delete(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
}


export default {
  getAll, create, deleteRecipe, getOne
}
