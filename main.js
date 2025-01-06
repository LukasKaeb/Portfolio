secretProject = document.getElementById('secret')
secretButton = document.getElementById('secret-button')
hideButton = document.getElementById('hide-secret')

const secret = () => {
    alert('You found the secret project!')
    secretProject.style.display = 'block'
}

const hideSecret = () => {
    secretProject.style.display = 'none'
}


secretButton.addEventListener('click', secret)

hideButton.addEventListener('click', hideSecret)