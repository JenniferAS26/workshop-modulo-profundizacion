import { readAccounts, updateAccount, deleteAccount } from "../services/api.js";

const data = await readAccounts();

let cardsContainer = document.querySelector('.user-cards-container');


data.forEach(account => {
  const { name, identification, telephone, email, avatar, id } = account;

  cardsContainer.innerHTML += `
  <div class="user-cards-container__card" id="user-cards-container__card--${id}">
    <div class="user-cards-container__card--image-container">
      <div class="external-wrapper">
        <div class="inner-wrapper">
          <img src="${avatar}" alt="avatar image">
        </div>
      </div>
    </div>
    <div class="user-cards-container__card--info">
      <h3 class="user-cards-container__card--info--title">${name}</h3>
      <p class="user-cards-container__card--info--text">Información de contacto</p>
      <p class="user-cards-container__card--info--info-id"><i class="fa-solid fa-id-card"></i> ${identification}</p>
      <p class="user-cards-container__card--info--info-telephone"><i class="fa-solid fa-phone"></i> ${telephone}</p>
      <p class="user-cards-container__card--info--info-email"><i class="fa-solid fa-at"></i> ${email}</p>
      <div class="user-cards-container__card--info--buttons-container" id="${id}">
        <button class="card-button edit" type="button" >Editar</button>
        <button class="card-button delete" type="button" >Eliminar</button>
      </div>
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

// Show/Close Modal Update Account
const modalUpdateAccount = document.querySelector('.modal-upload-account__background');
const closeModalButton = document.querySelector('.cancel');
closeModalButton.addEventListener('click', () => {
  modalUpdateAccount.style.display = 'none';
})

const getAllEditButtons = document.querySelectorAll('.edit');

getAllEditButtons.forEach(editButton => 
  editButton.onclick = () => {
    modalUpdateAccount.style.display = 'grid';
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(nameInput.value, nameInput.value == '');
      const formInputValues = {
        name: nameInput.value,
        identification: idNumberInput.value,
        telephone: telephoneInput.value,
        email: emailInput.value,
        avatar: avatar.value,
        github: githubInput.value,
        linkedin: linkedinInput.value,
        birthday: dateInput.value
      }
      for (const key in formInputValues) {
        if (formInputValues[key]) continue
        delete formInputValues[key];
      }
      updateAccount(editButton.parentElement.id, formInputValues)
    })
    
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
    if (result.isConfirmed) {
      // User confirmed deletion, you can trigger your logic here
      const deleteConfirmed = true;
      // Use 'deleteConfirmed' in your logic to proceed with account deletion
      console.log('Account deletion confirmed');
      deleteAccount(deleteButton.parentElement.id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // User cancelled deletion
      const deleteConfirmed = false;
      // Use 'deleteConfirmed' in your logic to handle cancellation
      console.log('Account deletion cancelled');
    }
    
  });


