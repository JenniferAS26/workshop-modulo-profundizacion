const telephoneInputField = document.querySelector('[name="telephone"]')


// intl-tel-input twilio's plugin initialization 
const telephoneInput = window.intlTelInput(telephoneInputField, {
    preferredCountries: ['co', 'ar', 'mx', 'us', 'gb'],
    initialCountry: 'co', //auto
    // geoIpLookup: getIp,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
})

// ipinfo API integration to get country from device's IP (changeable with VPN)
function getIp (callback) {
    const IPINFO_TOKEN_ACCOUNT = 'e134769f128040'
    const IPINFO_ENDPOINT = `https://ipinfo.io/json?token=${IPINFO_TOKEN_ACCOUNT}` 

    fetch(IPINFO_ENDPOINT, { header: { 'Accept': 'application/json' }})
    .then(resp => resp.json())
    .catch(() => {
        return {
            country: 'co',
        }
    })
    .then(resp => callback(resp.country))
}

// 
const telephoneInputPlugin = document.querySelector('.iti')


// DOG WATER HARD CODE. 
// TELEPHONE INPUT FORMAT
telephoneInputPlugin.oninput = event => {
    if (event.inputType == 'deleteContentBackward') return

    const FIRST_INPUT = 1
    const firstInputIsANumber = /\d/.test(telephoneInputField.value) && telephoneInputField.value.length == FIRST_INPUT

    if (firstInputIsANumber) telephoneInputField.value = '(' + telephoneInputField.value

    const SECOND_PARENTHESIS = 3
    const threeNumberHaveBeenWritten = telephoneInputField.value.match(/\d/g)?.length == SECOND_PARENTHESIS

    if (threeNumberHaveBeenWritten) telephoneInputField.value = telephoneInputField.value + ')'

    const hereGoesASpace = characterPosition => telephoneInputField.value.length == characterPosition
    const FIFTH_CHARACTER = 5, NINTH_CHARACTER = 9

    if (hereGoesASpace(FIFTH_CHARACTER)) telephoneInputField.value =  telephoneInputField.value + ' '
    if (hereGoesASpace(NINTH_CHARACTER)) telephoneInputField.value =  telephoneInputField.value + ' '
}
