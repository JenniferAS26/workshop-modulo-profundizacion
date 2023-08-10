// Auxiliar functions
const showError = (divInput, divError, errorMessage, show = true) => {
  if (show) {
    divError.textContent = errorMessage;
    divInput.style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    divError.textContent = errorMessage;
    divInput.style.borderColor = '#D3D3D3';
  } 
}

const verifyFilled = (divInput, divError) => {
  if (divInput.value.length > 0) {
    showError(divInput, divError, '', false);
    
  } else {
    showError(divInput, divError, 'Este campo no puede estar vacio');
    
  }
}

export { showError, verifyFilled };

// Confirm button
// let confirmButton = document.querySelector('.modal-checkout__button');
// confirmButton.addEventListener('click', e => {
//   e.preventDefault();
//   // name validation
//   verifyFilled(nameInput, nameErrorDiv);
//   // id number validation
//   verifyFilled(IdNumberInput, IdErrorDiv);
//   // telephone validation
//   verifyFilled(telephoneInput, telephoneErrorDiv);
//   // email validation
//   verifyFilled(emailInput, emailErrorDiv);
//   // credit card number validation
//   verifyFilled(numberCreditCardInput, numberCreditCardErrorDiv);
//   // month validation
//   if (Number.parseInt(monthInput.value, 10) > 0 && Number.parseInt(monthInput.value, 10) <= 12) {
//     showError(monthInput, monthErrorDiv, '', false);

//   } else {
//     showError(monthInput, monthErrorDiv, 'Mes incorrecto');
//   }
//   // year validation
//   verifyFilled(yearInput, yearErrorDiv);
//   // cvc validation
//   verifyFilled(cvcInput, cvcErrorDiv);
// })
