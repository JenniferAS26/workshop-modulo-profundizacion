import { updateInputLastState, validInputReturn } from "../formValidation.js"

const emailInput = document.querySelector('input[name="email"]')
const errorLabelOfEmail = emailInput.nextElementSibling

emailInput.onkeydown = e => {
    const spaceKey = e.key == ' '
    const atKey = e.key == '@'
    const nonEmailSymbolKey = e.key?.match(/[^a-zA-Z0-9@.\-_]+/)
    const multipleAts = emailInput.value.includes('@') && atKey 

    if (spaceKey || nonEmailSymbolKey || multipleAts) e.preventDefault() 
}

emailInput.onkeyup = e => {
    // if tabbed into email input, don't invalidate
    if (e.key == 'Tab') return

    // Invalidate input until all requiremets are met
    emailInput.currentState = false
    updateInputLastState(emailInput)

    // if email input, is empty, change error label message
    if (!emailInput.value.length) return errorLabelOfEmail
    .innerText = 'Your email cannot be empty'

    // EMAIL INPUT CONSTRAINTS
    const regEx_letters = /[a-zA-Z]/

    const pointOnStart = emailInput.value.at(0) == '.'

    const lettersBeforeAt = emailInput.value.includes('@')
    ? regEx_letters.test(emailInput.value.substring(0, emailInput.value.indexOf('@')))
    : regEx_letters.test(emailInput.value)

    const lettersAfterAt = emailInput.value.includes('@') 
    ? emailInput.value.slice(emailInput.value.indexOf('@')).includes('.')
        ? regEx_letters.test(emailInput.value.slice(emailInput.value.indexOf('@'), emailInput.value.lastIndexOf('.')))
        : regEx_letters.test(emailInput.value.slice(emailInput.value.indexOf('@'))) 
    : false

    const includesPoint = lettersAfterAt 
    ? emailInput.value.includes('.') : false

    const includesCom = regEx_letters.test(emailInput.value.at(-1))

    // ERRORS TO SHOWCASE
    const error = {
        '.@': 'Please enter a part before "@"',
        '@': 'Please include an "@"',
        '@.': 'Please enter a part following "@" and before "."',
        '.': 'Please include a "." after "@" and before "com"',
        'com': 'Please include a valid termination for your email',
        '.!': '"." is being used at a bad position'
    }

    // Logic flowchart for restrictions on a email input
    pointOnStart ? errorLabelOfEmail.innerText = error['.!']
    : !lettersBeforeAt ? errorLabelOfEmail.innerText = error['.@']
    : !emailInput.value.includes('@') ? errorLabelOfEmail.innerText = error['@']
    : !lettersAfterAt ? errorLabelOfEmail.innerText = error['@.']
    : !includesPoint ? errorLabelOfEmail.innerText = error['.']
    : !includesCom ? errorLabelOfEmail.innerText = error['com'] 
    : validInputReturn(emailInput, errorLabelOfEmail)
}

// Handle paste event on email input
emailInput.oninput = e => {
    // console.log(e.inputType == undefined, e.inputType)
    // CURIOSITY: [auto complete] input event trigger has no inputType property defined

    if (e.inputType != 'insertFromPaste' && e.inputType != undefined) return 

    let noSymbolsInput = emailInput.value
    .replace(/[^\w@.-]+/g, '') // Remove unwanted characters
    .trim()                    // Remove empty spaces

    // Reduce multiple at symbols (@) to only the last one
    const beforeLatterAt =  noSymbolsInput.slice(0, noSymbolsInput.lastIndexOf('@'))
    const afterLatterAt = noSymbolsInput.slice(noSymbolsInput.lastIndexOf('@')) 
    noSymbolsInput = beforeLatterAt.replaceAll('@', ``)
    
    // Join and return brand new curated email on paste events 
    noSymbolsInput = noSymbolsInput + afterLatterAt
    return emailInput.value = noSymbolsInput
}