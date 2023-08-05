export const deleteAccount = async (userId) => {
    swal({
        title: 'Delete Account',
        text: 'Are you sure you want to delete your account?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            // User confirmed deletion, you can trigger your logic here
            const deleteConfirmed = true;
            // Use 'deleteConfirmed' in your logic to proceed with account deletion
            console.log('Account deletion confirmed');
        } else {
            // User cancelled deletion
            const deleteConfirmed = false;
            // Use 'deleteConfirmed' in your logic to handle cancellation
            console.log('Account deletion cancelled');
        }
    });

    
    // const apiUrl = `${api}userAccounts/`;
    // try {
    //   await axios.delete(`${apiUrl}${userId}`);
    //   return true;
    // } catch (error) {
    //   console.error('Error update product:', error);
    //   alert('Hubo un error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
    // }
}