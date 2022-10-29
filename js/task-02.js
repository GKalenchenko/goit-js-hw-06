const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// ---------------------------------------------------------------- //
const findUl = document.querySelector(`#ingredients`);

const ingredientArray = [];

for (let ingredient of ingredients) {
  const createEl = document.createElement(`li`);
  createEl.textContent = ingredient;
  ingredientArray.push(createEl);
}
findUl.append(...ingredientArray);
