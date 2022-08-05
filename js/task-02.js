const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navList = document.querySelector("#ingredients")


ingredients.forEach((element) => {
  const listEl = document.createElement('li')
  listEl.classList.add('item')
  listEl.textContent = `${element}`
  navList.appendChild(listEl)
});




