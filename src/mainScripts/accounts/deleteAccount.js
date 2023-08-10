import { confirmedDeleteAccountSweetAlert, deleteAccountSweetAlert } from "../../resources/sweetAlert.js";
import { deleteData } from "../../services/api.js";
import { getAllDeleteButtons } from "./renderAccounts.js";

getAllDeleteButtons.forEach(deleteButton => 
  deleteButton.onclick = async () => {
    const userConfirmDeletion = await deleteAccountSweetAlert()

    if (!userConfirmDeletion.isConfirmed) return 

    // Use 'deleteConfirmed' in your logic to proceed with account deletion
    await deleteData('users', deleteButton.parentElement.id)
    await confirmedDeleteAccountSweetAlert()
    window.location = 'accounts.html'
});