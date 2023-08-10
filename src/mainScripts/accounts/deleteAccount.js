import { confirmedDeleteAccountSweetAlert, deleteAccountSweetAlert } from "../../resources/sweetAlert.js";
import { deleteData } from "../../services/api.js";

const getAllDeleteButtons = document.querySelectorAll('.delete');

getAllDeleteButtons.forEach(deleteButton => 
  deleteButton.onclick = async () => {

    if (!deleteAccountSweetAlert.isConfirmed) return 

    // Use 'deleteConfirmed' in your logic to proceed with account deletion
    await deleteData('users', deleteButton.parentElement.id)
    confirmedDeleteAccountSweetAlert
    window.location = 'accounts.html'
});