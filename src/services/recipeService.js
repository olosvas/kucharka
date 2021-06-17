import axios from 'axios'
const baseUrl = 'https://unicorn-cook-book-19.herokuapp.com/recipe'
/*
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
*/
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  /*
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.post(baseUrl, newObject, config)
  */
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}


const deleteRecipe = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}


export default {
  getAll, create, deleteRecipe
}
