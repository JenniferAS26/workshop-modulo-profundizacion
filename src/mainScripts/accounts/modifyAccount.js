import { readData, updateData, saveImage } from "../../services/api.js";
import { 
    confirmedModifyAccountSweetAlert, 
    modifyAccountSweetAlert 
} from "../../resources/sweetAlert.js";

// Toggle Update Account Modal
const modalUpdateAccount = document.querySelector('.modal-upload-account__background');
const closeModalButton = document.querySelector('.cancel');

closeModalButton.onclick = () => {
  modalUpdateAccount.style.display = 'none';
}

const getAllEditButtons = document.querySelectorAll('.edit');

getAllEditButtons.forEach(editButton => 
  editButton.onclick = async () => {

    const DB_ID_PRODUCT = editButton.parentElement.id

    const userExistingData = await readData('users', DB_ID_PRODUCT) 
    delete userExistingData.id

    currentAvatar.src = userExistingData.avatar;
    
    for (const key in userExistingData) {
      document.querySelector(`[name="${key}"]`).value = userExistingData[key]
    }
    
    modalUpdateAccount.style.display = 'grid';
    
    form.onsubmit = async event => {
      event.preventDefault();

      const file = avatar.files[0];
      const imageUrl = await saveImage(file);

      const formInputValues = {
        name: nameInput.value,
        identification: idNumberInput.value,
        telephone: telephoneInput.value,
        email: emailInput.value,
        avatar: imageUrl,
        github: githubInput.value,
        linkedin: linkedinInput.value,
        birthday: dateInput.value
      }

      for (const key in formInputValues) {
        if (formInputValues[key]) continue
        formInputValues[key] = userExistingData[key]
      }

      if (!modifyAccountSweetAlert.isConfirmed) return 

      // User confirmed deletion, you can trigger your logic here
      await updateData('users', DB_ID_PRODUCT, formInputValues)
      confirmedModifyAccountSweetAlert
      window.location.reload()
    }
  });