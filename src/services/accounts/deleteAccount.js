export const deleteAccount = async (userId) => {
  const apiUrl = `${api}userAccounts/`;
  try {
    await axios.delete(`${apiUrl}${userId}`);
    return true;
  } catch (error) {
    console.error('Error update product:', error);
    alert('Hubo un error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
  }
   
}