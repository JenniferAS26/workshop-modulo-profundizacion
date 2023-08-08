export const updateAccount = async (userId) => {
  // Swal.fire({
  //   title: 'Enter Your Information',
  //   html:
  //     '<input id="swal-input-name" class="swal2-input" placeholder="Name">' +
  //     '<input id="swal-input-identification" class="swal2-input" placeholder="Identification">' +
  //     '<input id="swal-input-telephone" class="swal2-input" placeholder="Telephone">' +
  //     '<input id="swal-input-email" class="swal2-input" placeholder="Email">' +
  //     '<input id="swal-input-avatar" type="file" class="swal2-file">',
  //   focusConfirm: false,
  //   preConfirm: () => {
  //     const name = document.getElementById('swal-input-name').value;
  //     const identification = document.getElementById('swal-input-identification').value;
  //     const telephone = document.getElementById('swal-input-telephone').value;
  //     const email = document.getElementById('swal-input-email').value;
  //     const avatar = document.getElementById('swal-input-avatar').files[0];

  //     // Perform input validation here
  //     const errors = [];

  //     if (!/^[A-Za-z\s]+$/.test(name)) {
  //       errors.push('Name should only contain letters.');
  //     }

  //     if (!/^\d+$/.test(identification)) {
  //       errors.push('Identification should only contain numbers.');
  //     }

  //     if (!/^\d+$/.test(telephone)) {
  //       errors.push('Telephone should only contain numbers.');
  //     }

  //     if (!/\S+@\S+\.\S+/.test(email)) {
  //       errors.push('Email should be in a valid format.');
  //     }

  //     if (errors.length > 0) {
  //       Swal.showValidationMessage(errors.join('<br>'));
  //     }

  //     return { name, identification, telephone, email, avatar };
  //   },
  // }).then(result => {
  //   if (result.isConfirmed) {
  //     // Handle the form submission here
  //     console.log(result.value);
  //   }
  // });

    // const apiUrl = `${api}userAccounts/`;
    // try {
    //   const response = await axios.put(`${apiUrl}${userId}`);
    //   return response;
    // } catch (error) {
    //   console.error('Error update product:', error);
    //   alert('Hubo un error al actualizar la cuenta. Por favor, inténtalo de nuevo.');
    // }
    console.log('click on edit button');
}