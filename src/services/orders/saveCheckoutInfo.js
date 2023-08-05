export const saveCheckoutinfo = async (userData) => {
    const apiUrl = `${api}users/`;
    try {
      const response = await axios.post(apiUrl, userData);
      console.log("response create", response.data)
      return response
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.');
    }
}