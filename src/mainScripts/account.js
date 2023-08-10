import { readData, updateData, deleteData, saveImage } from "../services/api.js";
import './registerAccountForm/formInputsConstraints/nameInput.js'
import './registerAccountForm/formInputsConstraints/id_phone_numberInputs.js'
import './registerAccountForm/formInputsConstraints/emailInput.js'
import './registerAccountForm/formInputsConstraints/websiteInput.js'
import './registerAccountForm/formInputsConstraints/dateInput.js'
import './registerAccountForm/formInputsConstraints/avatarInput.js'

const data = await readData('users');

const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dkd5jyxby/image/upload';

let cardsContainer = document.querySelector('.user-cards-container');


data.forEach(account => {
  const { name, identification, telephone, email, avatar, id } = account;

  cardsContainer.innerHTML += `
  <div class="user-cards-container__card">
    <div class="up-wrapper">
      <div class="user-cards-container__card--image-container">
        <div class="external-wrapper">
          <div class="inner-wrapper">
            <img class="user-cards-container__card--image" src="${avatar}" alt="avatar image">
          </div>
        </div>
      </div>
      <div class="user-cards-container__card--info">
        <h3 class="user-cards-container__card--info--title">${name}</h3>
        <p class="user-cards-container__card--info--info-id"><i class="fa-regular fa-id-badge"></i>${identification}</p>
        <p class="user-cards-container__card--info--info-telephone"><i class="fa-solid fa-phone"></i>${telephone}</p>
        <p class="user-cards-container__card--info--info-email"><i class="fa-solid fa-at"></i>${email}</p>
      </div>
    </div>
    <div class="user-cards-container__card--buttons-container" id=${id}>
      <button class="card-button edit" type="button"><i class="fa-solid fa-user-pen"></i></button>
      <button class="card-button delete" type="button"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>
  `;
});


const form = document.querySelector('.modal-upload-account__form-section--form');
const avatar = document.querySelector('.input-image');
const nameInput = document.querySelector('.name-input');
const idNumberInput = document.querySelector('.idnumber-input');
const telephoneInput = document.querySelector('.telephone-input');
const emailInput = document.querySelector('.email-input');
const dateInput = document.querySelector('.date-input');
const githubInput = document.querySelector('.github-input');
const linkedinInput = document.querySelector('.linkedin-input');
const currentAvatar = document.querySelector('.current-avatar');

// Show/Close Modal Update Account
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
      const imageUrl = await saveImage(cloudinaryUrl, file);

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

      const result = await Swal.fire({
        title: 'Edit Account',
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

      if (!result.isConfirmed) return 

      // User confirmed deletion, you can trigger your logic here
      await updateData('users', DB_ID_PRODUCT, formInputValues)
      await Swal.fire({
        title: "User modified",
        icon: "success",
        button: "Great",
        "customClass": {
        button: 'custom-button',
        htmlContainer: 'custom-container'
        },
      })
      window.location.reload()
    }
  });

const getAllDeleteButtons = document.querySelectorAll('.delete');

getAllDeleteButtons.forEach(deleteButton => 
  deleteButton.onclick = async () => {
    const result = await Swal.fire({
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
    if (!result.isConfirmed) return 

    // Use 'deleteConfirmed' in your logic to proceed with account deletion
    await deleteData('users', deleteButton.parentElement.id)
    await Swal.fire({
      title: "User deleted",
      icon: "success",
      button: "Great",
      "customClass": {
      button: 'custom-button',
      htmlContainer: 'custom-container'
      },
    })
    window.location = 'accounts.html'
  });


