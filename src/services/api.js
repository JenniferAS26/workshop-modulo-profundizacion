// json db hosted on mockapi.io free cloud-based API REST 
const apiURL = 'https://64d1bacbf8d60b174360d1ce.mockapi.io/' 
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/image/upload';

const createData = async (endPoint, body) => {
  if (endPoint == 'orders') return await axios
  .post('http://localhost:3000/orders', body)

  try {
    await axios.post(apiURL + endPoint, body)
  } catch (error) { 
    handleError(error)
  }
} 
const readData = async (endPoint, id = '') => {
  try {
    const get = await axios.get(apiURL + endPoint + '/' + id)
    return get.data
  } catch (error) { 
    handleError(error)
  }
}
const updateData = async (endPoint, id, body) => {
  try {
    await axios.put(apiURL + endPoint + '/' + id, body)
  } catch (error) { 
    handleError(error)
  }
}
const deleteData = async (endPoint, id) => {
  try {
    await axios.delete(apiURL + endPoint + '/' + id)
  } catch (error) { 
    handleError(error)
  }
}

function handleError(error) {
  return console.log('Error during the HTTP REQUEST:', error)
}

const saveImage = async file => {
  const body = {
    file,
    api_key: 357824561481388,
    upload_preset: 't4dskobq'
  }
  const headers = {
    "Content-Type": "multipart/form-data",
  }
  const response = await axios.post(CLOUDINARY_URL, body, { headers });
  return response.data.url
}

export { createData, readData, updateData, deleteData, saveImage  }