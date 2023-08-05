export const updateAccount = async (userId) => {
    const apiUrl = `${api}userAccounts/`;
    try {
      const response = await axios.put(`${apiUrl}${userId}`);
      return response;
    } catch (error) {
      console.error('Error update product:', error);
      alert('Hubo un error al actualizar la cuenta. Por favor, inténtalo de nuevo.');
    }
}