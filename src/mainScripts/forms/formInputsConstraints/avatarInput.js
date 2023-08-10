const imageInput = document.querySelector('input[type=file]')
const imagePreview = document.querySelector('.current-avatar')
const imageReaderAPI = new FileReader()

imageReaderAPI.onloadend = () => {
    imagePreview.src = imageReaderAPI.result    
}

imageInput.onchange = event => loadImageWithoutUploadIt(event)


function loadImageWithoutUploadIt (event) {
    const chosenImage = event.target.files[0]
    imageReaderAPI.readAsDataURL(chosenImage)
}