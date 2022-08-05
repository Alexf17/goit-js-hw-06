const navCategories = document.querySelector("#categories")

const categoryList = navCategories.querySelectorAll(".item")
console.log(`Number of categories: ${categoryList.length}`)

categoryList.forEach((element) => {
  return console.log(
      `Category: ${element.querySelector("h2").textContent} 
Elements: ${element.querySelectorAll("li").length}`
  );
});