const modifyAccountSweetAlert = await Swal.fire({
    title: 'Modify Account',
    text: 'Are you sure you want to edit your account?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, change it!',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    "customClass": {
      button: 'custom-button',
      htmlContainer: 'custom-container'
    },
})

const confirmedModifyAccountSweetAlert = await Swal.fire({
    title: "User modified",
    icon: "success",
    button: "Great",
    "customClass": {
        button: 'custom-button',
        htmlContainer: 'custom-container'
    },
})

const deleteAccountSweetAlert = await Swal.fire({
    title: 'Delete Account',
    text: 'Are you sure you want to delete your account?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    "customClass": {
      button: 'custom-button',
      htmlContainer: 'custom-container'
    },
})

const confirmedDeleteAccountSweetAlert = await Swal.fire({
    title: "User deleted",
    icon: "success",
    button: "Great",
    "customClass": {
        button: 'custom-button',
        htmlContainer: 'custom-container'
    },
})

export {
    modifyAccountSweetAlert,
    confirmedModifyAccountSweetAlert,
    deleteAccountSweetAlert,
    confirmedDeleteAccountSweetAlert,
}   