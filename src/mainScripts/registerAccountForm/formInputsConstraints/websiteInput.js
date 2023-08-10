import { validInputReturn, updateInputLastState } from "../formValidations/validateInputsEvents.js"

const gitHubInput = document.querySelector('[name="github"]')
const linkedinInput = document.querySelector('[name="linkedin"]')

const websiteInputs = [gitHubInput, linkedinInput] 

websiteInputs.forEach(websiteInput => {
    websiteInput.oninput = () => {
        const validWebsite = websiteInput.name
        const domain = validWebsite + '.com'
        const includesDomain = websiteInput.value.includes(domain)
        const startsWithLetter = /[a-zA-Z]/.test(websiteInput.value.charAt(0))
        const isAValidWebsite = startsWithLetter & includesDomain
        const errorLabel = websiteInput.nextElementSibling

        if (isAValidWebsite) return validInputReturn(websiteInput, errorLabel)

        websiteInput.currentState = false
        updateInputLastState(websiteInput)
        errorLabel.innerText = `Insert a valid ${validWebsite} link`
    }
})