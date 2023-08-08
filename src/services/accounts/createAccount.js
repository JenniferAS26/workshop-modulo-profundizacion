export const createAccount = async (userData) => {
    const apiUrl = `${api}userAccounts/`;
    try {
      const response = await axios.post(apiUrl, userData);
      console.log("response create", response.data)
      return response.data
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Hubo un error al crear la cuenta. Por favor, inténtalo de nuevo.');
    }
}