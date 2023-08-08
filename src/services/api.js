export { createAccount } from './accounts/createAccount.js'
export { readAccounts } from './accounts/readAccounts.js'
export { updateAccount } from './accounts/updateAccount.js'
export { deleteAccount } from './accounts/deleteAccount.js'

export { getProducts } from './products/getProducts.js'

export { saveCheckoutinfo } from './orders/saveCheckoutInfo.js'
const getData = async (id) => {
  const apiUrl = id ? `${api}products/${id}` : `${api}products`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const saveCheckoutinfo = async (userData) => {
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

const getInfoAccount = async () => {
  const apiUrl = `${api}userAccounts/`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching userAccounts:', error);
    return [];
  }
};

const createAccount = async (userData) => {
  const apiUrl = `${api}userAccounts/`;
  try {
    const response = await axios.post(apiUrl, userData);
    console.log("response create", response.data)
    return response
  } catch (error) {
    console.error('Error creating product:', error);
    alert('Hubo un error al crear la cuenta. Por favor, inténtalo de nuevo.');
  }
}

const updateAccount = async (userId) => {
  const apiUrl = `${api}userAccounts/`;
  try {
    const response = await axios.put(`${apiUrl}${userId}`);
    return response;
  } catch (error) {
    console.error('Error update product:', error);
    alert('Hubo un error al actualizar la cuenta. Por favor, inténtalo de nuevo.');
  }
}

const deleteAccount = async (userId) => {
  const apiUrl = `${api}userAccounts/`;
  try {
    await axios.delete(`${apiUrl}${userId}`);
    return true;
  } catch (error) {
    console.error('Error update product:', error);
    alert('Hubo un error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
  }
}


import './accounts/test.js'
// import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
// // import axios from 'axios';

// const api = 'http://localhost:3000/';

// const getData = async (id) => {
//   const apiUrl = id ? `${api}products/${id}` : `${api}products`;
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

// const saveCheckoutinfo = async (userData) => {
//   const apiUrl = `${api}users/`;
//   try {
//     const response = await axios.post(apiUrl, userData);
//     console.log("response create", response.data)
//     return response
//   } catch (error) {
//     console.error('Error creating product:', error);
//     alert('Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.');
//   }
// }

// const getInfoAccount = async () => {
//   const apiUrl = `${api}userAccounts`;
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching userAccounts:', error);
//     return [];
//   }
// };

// const createAccount = async (userData) => {
//   const apiUrl = `${api}userAccounts/`;
//   try {
//     const response = await axios.post(apiUrl, userData);
//     console.log("response create", response.data)
//     return response
//   } catch (error) {
//     console.error('Error creating product:', error);
//     alert('Hubo un error al crear la cuenta. Por favor, inténtalo de nuevo.');
//   }
// }

// const updateAccount = async (userId) => {
//   const apiUrl = `${api}userAccounts/`;
//   try {
//     const response = await axios.put(`${apiUrl}${userId}`);
//     return response;
//   } catch (error) {
//     console.error('Error update product:', error);
//     alert('Hubo un error al actualizar la cuenta. Por favor, inténtalo de nuevo.');
//   }
// }

// const deleteAccount = async (userId) => {
//   const apiUrl = `${api}userAccounts/`;
//   try {
//     await axios.delete(`${apiUrl}${userId}`);
//     return true;
//   } catch (error) {
//     console.error('Error update product:', error);
//     alert('Hubo un error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
//   }
// }


// export { getData, saveCheckoutinfo, getInfoAccount, createAccount, updateAccount, deleteAccount };