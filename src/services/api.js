// json db hosted on mockapi.io free cloud-based API REST 
const apiURL = 'https://64d1bacbf8d60b174360d1ce.mockapi.io' 

const createData = async () => {
  try {
    await axios()
  } catch (error) { 
    handleError(error)
  }
} 
const readData = async () => {
  try {
    await axios()
  } catch (error) { 
    handleError(error)
  }
}
const updateData = async () => {
  try {
    await axios()
  } catch (error) { 
    handleError(error)
  }
}
const deleteData = async () => {
  try {
    await axios()
  } catch (error) { 
    handleError(error)
  }
}

function handleError(error) {
  return console.log('Error during the HTTP REQUEST:', error)
}

export { createData, readData, updateData, deleteData }