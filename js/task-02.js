const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const navList = document.querySelector("#ingredients")
// ingredients.forEach((element) => {
//   const listEl = document.createElement('li')
//   listEl.classList.add('item')
//   listEl.textContent = `${element}`
//   navList.appendChild(listEl)
// });


const CreateListEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add("item");
    return listEl;
  });
};

const navList = document.querySelector("#ingredients");

navList.append(...CreateListEl(ingredients));

