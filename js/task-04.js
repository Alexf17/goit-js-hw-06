let counterValue = 0;

const getCounter = document.querySelector('#value')
const getDecrement = document.querySelector('[data-action="decrement"]')
const getIncrement = document.querySelector('[data-action="increment"]')


const decrementValue = event => {
    getCounter.textContent = counterValue -= 1;
	// console.log(counterValue);
}

const incrementValue = event => {
	getCounter.textContent = counterValue += 1;
	// console.log(counterValue);
}


getDecrement.addEventListener("click", decrementValue);

getIncrement.addEventListener("click", incrementValue);

