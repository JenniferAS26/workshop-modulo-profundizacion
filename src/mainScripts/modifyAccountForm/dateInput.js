// Create date input
const dateInput = document.createElement('input')
document.body.appendChild(dateInput)
dateInput.type = 'date'

// Create date formatter
const dateFormatter = Intl.DateTimeFormat('en-us', {
    'dateStyle': 'full'
})

// Get date from date input
dateInput.addEventListener('input', function() {
    let userGivenDate = new Date(this.value)
    userGivenDate.setDate(userGivenDate.getDate() + 1)

    userGivenDate = dateFormatter.format(userGivenDate) 
    console.log(dateFormatter.format(userGivenDate))
    
    this.value = userGivenDate
})