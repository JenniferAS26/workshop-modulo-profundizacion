import './formInputsConstraints/nameInput.js'
import './formInputsConstraints/emailInput.js'
import './formInputsConstraints/id_phone_numberInputs.js'

const formHTMLElement = document.querySelector('form')

// only if all form fields are valid, submit event proceds 
formHTMLElement.onsubmit = e => {
      e.preventDefault()

    const formInputsElements = [...formHTMLElement.querySelectorAll('input')]
    const allInputsAreValid = formInputsElements.every(formInput => formInput.currentState)

    if (allInputsAreValid) return console.log('miau!!!') // => createAccount()
    
    // emulate focus and blur events to trigger error styles
    formHTMLElement.querySelectorAll('input')
    .forEach(input => {
      input.focus()
      input.blur()
    })

    // ux: select first invalid form input to fill out field 
    formHTMLElement.querySelector('.invalidFormInput').focus()
}
// import { createAccount } from "../../services/api.js";
// import { showError } from "../../resources/auxiliarFuncs.js";

// const Form = document.querySelector('form')

// Form.onsubmit = e => {
//   e.preventDefault()

//   Form.querySelectorAll('input')
//   .forEach(formInput =>{ 

//     formInput.classList.remove('form-wrapper__input')
//     formInput.classList.toggle('form__input')
//     formInput.classList.toggle('invalidFormInput')    
//   })

//   console.log('hehe hi')  
// }

// function validatInput (input) {
//   if (input.validation) {
//     formInput.classList.toggle('form__input')
//     formInput.classList.toggle('invalidFormInput')
//   } else {
//     formInput.classList.toggle('form__input')
//     formInput.classList.toggle('invalidFormInput')
//   } 
// }
