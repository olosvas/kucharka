import axios from 'axios'
const categorieUrl = 'http://localhost:3001/categories'


const getAllCategories = () => {
  const request = axios.get(categorieUrl)
  return request.then(response => response.data)
}

const createNewCategory = (newObject) => {

  const request = axios.post(categorieUrl, newObject)
  return request.then(response => response.data)
}


export default {
  getAllCategories
}
