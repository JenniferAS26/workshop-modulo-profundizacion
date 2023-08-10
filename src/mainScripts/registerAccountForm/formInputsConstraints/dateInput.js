import { updateInputLastState, validInputReturn } from "../formValidations/validateInputsEvents.js"

const dateInput = document.querySelector('[name="birthday"]')
const errorLabelDateInput = dateInput.nextElementSibling

// Create date formatter
const dateFormatter = Intl.DateTimeFormat('en-us', {
    'dateStyle': 'full'
})

// Get date from date input
dateInput.onkeyup = () => {
    dateInput.oninput = ''
    handleDateInputs()
}

dateInput.oninput = handleDateInputs
dateInput.addEventListener('blur', () => {
    const MM_DD_YYYY_FORMAT = 9
    const dateInputFilledOut = dateInput.value.length > MM_DD_YYYY_FORMAT
    if (dateInputFilledOut) return validInputReturn(dateInput, errorLabelDateInput)
})

function handleDateInputs () {
    const yearPlaceHolderFilled = !dateInput.value.substring(0, 4).includes('0')
    const MM_DD_YYYY_FORMAT = 9
    const dateInputFilledOut = dateInput.value.length > MM_DD_YYYY_FORMAT
    const dataInputIsValid = yearPlaceHolderFilled && dateInputFilledOut


    if (dataInputIsValid) return validInputReturn(dateInput, errorLabelDateInput)

    dateInput.currentState = false
    updateInputLastState(dateInput)
    errorLabelDateInput.innerText = 'Fill out your date of birth on mm-dd-yyyy format'

    // let userGivenDate = new Date(dateInput.value)
    // userGivenDate.setDate(userGivenDate.getDate() + 1)

    // userGivenDate = dateFormatter.format(userGivenDate) 
}