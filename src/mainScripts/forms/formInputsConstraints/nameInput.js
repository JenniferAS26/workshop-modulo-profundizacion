import { updateInputLastState, validInputReturn } from "../formValidations/validateInputsEvents.js"

const nameInput = document.querySelector('input[name="name"]')
const errorLabelOfName = nameInput.nextElementSibling

nameInput.onkeydown = e => {
    // if key == specialKey || letter, allow
    const specialKeys = e.key == 'Backspace'  
    || e.key == ' ' || e.key == 'Tab' || e.key == 'Enter'
    
    const twoSpaces = e.key == ' ' && nameInput.value.at(-1) == ' ' 
    
    const exceptions = specialKeys
    || (e.key?.match(/[a-zA-Z]/) 
    && e.key.length == 1)

    if (exceptions && !twoSpaces) return 
    e.preventDefault() // else || moreSpaces, block.
}

nameInput.onkeyup = function(e) {
    if (e.key == undefined) return validInputReturn(nameInput, errorLabelOfName)

    if (e.key?.match(/[A-Za-z]/) && e.key.length > 1 
    && e.key != 'Backspace' && e.key != 'Enter') return

    // if empty, reject and change label
    !nameInput.value.trim() && (e.key?.match(/[A-Za-z]/) || e.key == ' ') 
    ? errorLabelOfName.innerText = 'Your name cannot be empty'
    : errorLabelOfName.innerText = 'Only letters allowed'
        
    // if space at the begininng, reject
    if (e.key == ' ' && !nameInput.value.trim()) nameInput.value = ''

    // if keyup shift after symbol, reject
    if (nameInput.style.color != 'black' && e.key == 'Shift') return 
    
    // ALWAYS PAINT RED UNLESS...
    
    // unless it's a letter
    if (e.key?.match(/[A-Za-z]/) && e.key.length == 1
    ) return validInputReturn(nameInput, errorLabelOfName)

    // unless it's a backspace and still got letters
    if (e.key == 'Backspace' && !!nameInput.value
    ) return validInputReturn(nameInput, errorLabelOfName)

    // unless it's a letter before keyup a shift
    if (nameInput.value.at(-1)?.match(/[A-Za-z]/) 
    && e.key == 'Shift') return validInputReturn(nameInput, errorLabelOfName)

    // unless it's a space after letter
    if (nameInput.value.match(/[A-Za-z]/) 
    && e.key == ' ') return validInputReturn(nameInput, errorLabelOfName)

    // BEYOND THERE... ALWAYS PAINT RED
    nameInput.currentState = false
    updateInputLastState(nameInput) // paint red...
}

nameInput.oninput = function(e) {
    // CURIOSITY: [auto complete] input event trigger has no inputType property defined
    if (e.inputType != 'insertFromPaste' && e.inputType != undefined) return 
    
    let curatedInput = nameInput.value
    .replace(/[^a-zA-Z]+/g, ' ')
    .replace(/ +/g, ' ').trim()

    return nameInput.value = curatedInput
}