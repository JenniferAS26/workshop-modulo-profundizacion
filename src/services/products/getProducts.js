export const getProducts = async (id) => {
    const apiUrl = id ? `${api}products/${id}` : `${api}products`;
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
};