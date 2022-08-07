const inputData = document.querySelector('#validation-input')
const inputDataLength = inputData.getAttribute('data-length')

inputData.addEventListener('blur',onInputBlur)

function onInputBlur(event) {
    
    event.currentTarget.value.length === +inputDataLength
    ?inputData.className = 'valid'
    :inputData.className = 'invalid'
    
}


