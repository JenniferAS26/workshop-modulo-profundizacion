import '../formInputsConstraints/nameInput.js'
import '../formInputsConstraints/emailInput.js'
import '../formInputsConstraints/id_phone_numberInputs.js'

const DEFAULT_AVATAR = 'https://pm1.aminoapps.com/6325/56a1f14cc51ce6eaaa6347465dfe52da42ef190e_128.jpg'
const formHTMLElement = document.querySelector('form')

// only if all form fields are valid, submit event proceds 
formHTMLElement.onsubmit = async event => {
    event.preventDefault()

    // Validate whether form is valid or invalid
    const formInputsElements = [...formHTMLElement.querySelectorAll('input')]
    const allInputsAreValid = formInputsElements.every(formInput => formInput.currentState)

    // IF FORM IS [VALID]
    if (allInputsAreValid) {
      // Retrieve all submitted values on form
      const formDataCatcher = new FormData(event.target)
      const formValuesToRegister = Object.fromEntries(formDataCatcher)
      
      // Default avatar [hehe xd]
      formValuesToRegister.avatar = DEFAULT_AVATAR;

      // Post brand new user on database
      (await import ('../../../services/api.js'))
      .createData('users', formValuesToRegister)

      // Notify to user
      const sweetAlert = await swal({
        title: "User registered",
        icon: "./assets/icons/check.png",
        button: "Great",
        "customClass": {
        button: 'custom-button',
        htmlContainer: 'custom-container'
        },
      })

      // Send user to accounts list view
      if (sweetAlert) return window.location = 'accounts.html'
    }


    // IF FORM IS [INVALID]

    // emulate focus and blur events to trigger error styles
    formHTMLElement.querySelectorAll('input')
    .forEach(input => {
      input.focus()
      input.blur()
    })

    // ux: select first invalid form input to fill out field 
    formHTMLElement.querySelector('.invalidFormInput')?.focus()
}