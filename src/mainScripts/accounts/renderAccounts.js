import { readData } from "../../services/api.js";

const registeredAccounts = await readData('users');

const cardAccountsContainer = document.querySelector('.user-cards-container');

registeredAccounts.forEach(existingAccount => {
    const { name, identification, telephone, email, avatar, id } = existingAccount;
  
    cardAccountsContainer.innerHTML += `
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

export const getAllModifyButtons = document.querySelectorAll('.edit');
export const getAllDeleteButtons = document.querySelectorAll('.delete');
