const inputData = document.querySelector('#name-input')
const outputData = document.querySelector('#name-output')


inputData.addEventListener('input',onInputChange)

function onInputChange(event) {
    event.currentTarget.value
    ?outputData.textContent = event.currentTarget.value
    :outputData.textContent = 'Anonymous'
    
}