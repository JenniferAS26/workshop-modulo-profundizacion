const telephoneInputField = document.querySelector('[name="telephone"]')

// intl-tel-input twilio's plugin initialization 
const telephoneInput = window.intlTelInput(telephoneInputField, {
    preferredCountries: ['co', 'ar', 'mx', 'us', 'gb'],
    initialCountry: 'auto',
    geoIpLookup: getIp,
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