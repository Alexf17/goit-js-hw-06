const inputData = document.querySelector('#name-input')
const outputData = document.querySelector('#name-output')


inputData.addEventListener('input',inputChange)

function inputChange(event) {
    event.currentTarget.value
    ?outputData.textContent = event.currentTarget.value
    :outputData.textContent = 'Anonymous'
    
}