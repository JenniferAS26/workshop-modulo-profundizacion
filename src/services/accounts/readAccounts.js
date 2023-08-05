export const readAccounts = async () => {
    const apiUrl = `${api}userAccounts`;
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching userAccounts:', error);
      return [];
    }
};