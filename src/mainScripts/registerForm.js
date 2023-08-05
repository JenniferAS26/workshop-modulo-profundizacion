import { createAccount } from "../services/api.js";
import { showError } from "../resources/auxiliarFuncs.js";

const createAccountButton = document.querySelector('.form-wrapper__button');

createAccountButton.addEventListener('click', e => {
  e.preventDefault();

  const name = document.querySelector('#input-name-fw').value;
  const identification = document.querySelector('#input-id-fw').value;
  const telephone = document.querySelector('#input-telephone-fw').value;
  const email = document.querySelector('#input-email-fw').value;
  createAccount({
    name,
    identification,
    telephone,
    email
  })

});

let nameInput = document.querySelector('#input-name-fw');
let nameErrorDiv = document.querySelector('.form-wrapper__name--error');

nameInput.addEventListener('input', () => {
  if (nameInput.value === '') {
    showError(nameInput, nameErrorDiv, 'Este campo no puede estar vacio');
  } else {
    nameCard.textContent = nameInput.value;
    showError(nameInput, nameErrorDiv, '', false);
  } 
});

// identification number
let IdNumberInput = document.querySelector('#input-id-fw');
let IdErrorDiv = document.querySelector('.form-wrapper__identification--error');

IdNumberInput.addEventListener('input', e => {
  let inputValue = e.target.value;

  if (IdNumberInput.value === '') {
    showError(IdNumberInput, IdErrorDiv, 'Este campo no puede estar vacio');
  } 
  
  let regExp = /[A-z]/g;
  if (regExp.test(IdNumberInput.value)) {
    showError(IdNumberInput, IdErrorDiv, 'Error de formato, números solamente');
  } else {
    IdNumberInput.value = inputValue.replace(/\s/g, '').trim();
    showError(IdNumberInput, IdErrorDiv, '', false);
  }
});

// Telephone
let telephoneInput = document.querySelector('#input-telephone-fw');
let telephoneErrorDiv = document.querySelector('.form-wrapper__telephone--error');

telephoneInput.addEventListener('input', e => {
  let inputValue = e.target.value;

  if (telephoneInput.value === '') {
    showError(telephoneInput, telephoneErrorDiv, 'Este campo no puede estar vacio');
  } 
  
  let regExp = /[A-z]/g;
  if (regExp.test(telephoneInput.value)) {
    showError(telephoneInput, telephoneErrorDiv, 'Error de formato, números solamente');
  } else {
    telephoneInput.value = inputValue.trim();
    showError(telephoneInput, telephoneErrorDiv, '', false);
  }
});

// identification email
let emailInput = document.querySelector('#input-email-fw');
let emailErrorDiv = document.querySelector('.form-wrapper__email--error');

emailInput.addEventListener('input', e => {
  if (emailInput.value === '') {
    showError(emailInput, emailErrorDiv, 'Este campo no puede estar vacio');
  } else {
    showError(emailInput, emailErrorDiv, '', false);
  }
});
