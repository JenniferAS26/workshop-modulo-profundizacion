document.querySelectorAll('input').forEach(formInput => {
  // Remove unnecesary class style attached to form inputs
  formInput.classList.remove('form-wrapper__input')
  
  // when blur any form input, change color to blue if valid
  formInput.onblur = function() {
    // If blur on input without keying down on it, leaving it empty, invalidate 
    if (!formInput.value.length) {
      formInput.currentState = false
      updateInputLastState(formInput)

      const errorLabelOfFormInput = formInput.nextElementSibling != null
      ? formInput.nextElementSibling : formInput.parentElement.nextElementSibling;

      errorLabelOfFormInput.innerText = `Your ${formInput.name} cannot be empty!`
    }

    formInput.lastBlurState ??= false // default lastBlurState to false since inputs start empty 
    formInput.currentBlurState = formInput.classList.contains('form__input') && !!formInput.value.length
    const noChangesOnBlurState = formInput.currentBlurState == formInput.lastBlurState

    if (noChangesOnBlurState) return

    formInput.lastBlurState = formInput.currentBlurState
    formInput.classList.toggle('blurValidFormInput')
  }
})

// Inputs conserve the same styles until their current state changes  
export function updateInputLastState(formInput) {
  // default lastState to true since first input can be right,
  formInput.lastState ??= true // otherwise, *input.js module handles it 

  const noChangesOnInputState = formInput.currentState == formInput.lastState

  if (noChangesOnInputState) return

  formInput.lastState = formInput.currentState

  formInput.classList.toggle('form__input')
  formInput.classList.toggle('invalidFormInput')
}

export function validInputReturn(formInput, errorLabel) {
  errorLabel.innerText = '' 
  formInput.currentState = true 
  updateInputLastState(formInput)
}