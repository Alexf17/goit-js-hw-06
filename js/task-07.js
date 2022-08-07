const inputData = document.querySelector('#font-size-control')
const textSize = document.querySelector('#text')

inputData.addEventListener('input',onInput)


function onInput(event) {
    textSize.style.fontSize = `${event.target.value}px`;
    console.log(event.target.value)
}