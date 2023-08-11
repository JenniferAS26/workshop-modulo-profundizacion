import { updateInputLastState, validInputReturn } from "../formValidations/validateInputsEvents.js"
import './telephoneInput.js'

const identificationInput = document.querySelector('[name="identification"]')
const telephoneInput = document.querySelector('[name="telephone"]')
const numberInputs = [ identificationInput, telephoneInput ]

numberInputs.forEach(numberInput => {
    numberInput.onkeydown = e => {
        // if key == specialKey || letter, allow
        const specialKeys = e.key == 'Backspace' || e.key == '+' || e.key == 'ArrowRight'
        || e.key == 'Control' || e.key == 'Tab' || e.key == 'Enter' || e.key == 'ArrowLeft'
        const exceptions = specialKeys || e.key?.match(/^[0-9]+$/) 

        if (e.ctrlKey || exceptions) return
        e.preventDefault() // else || moreSpaces, block.
    }

    numberInput.onkeyup = e => {
        const errorLabelOfNumberInput = numberInput.nextElementSibling == null 
        ? numberInput.parentElement.nextElementSibling : numberInput.nextElementSibling 

        const isALetter = /[a-zA-Z]/.test(e.key) && e.key.length == 1 
        if (isALetter) {
            numberInput.currentState = false
            updateInputLastState(numberInput)  
            return errorLabelOfNumberInput.innerText = 'Only numbers allowed'
        }

        // if empty, invalidate and change label
        !numberInput.value.length && (e.key?.match(/^[0-9]+$/) || e.key == 'Backspace')
        ? errorLabelOfNumberInput.innerText = `Your ${numberInput.name} cannot be empty`
        : errorLabelOfNumberInput.innerText = 'Only numbers allowed'

        // if it's not a number, invalidate
        if (!numberInput.value.length || (!e.key?.match(/^[0-9]+$/) && !e.key == 'Backspace')) {
            numberInput.currentState = false
            return updateInputLastState(numberInput)   
        }

        // if it's a number, must have 9 digits at least
        const minimumLength = numberInput.name == 'telephone' ? 10 : 7

        if (numberInput.value.match(/\d/g)?.length < minimumLength && numberInput.value.match(/\d/g)?.length > 0) {
            return errorLabelOfNumberInput.innerText = `Your ${numberInput.name} must have ${minimumLength} numbers at least`
        }

        // if its a number with 9 or more digits, validate
        validInputReturn(numberInput, errorLabelOfNumberInput)
    }

    numberInput.oninput = e => {
        // CURIOSITY: [auto complete] input event trigger has no inputType property defined
        if (e.inputType != 'insertFromPaste' && e.inputType != undefined) return 

        let curatedInput = numberInput.value
        .replace(/\D+/g, ' ').replace(/ +/g, '').trim()

        return numberInput.value = curatedInput
    }
})