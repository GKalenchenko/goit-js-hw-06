function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// ---------------------------------------------------------------- //
const formRef = document.getElementById('controls');
const inputRef = formRef.querySelector('input');

const buttonCreateRef = formRef.querySelector('[data-create]');
const buttonDestroyRef = formRef.querySelector('[data-destroy]');

const boxesListRef = document.getElementById('boxes');

const inputApprove = () => {
  createBoxes(`${inputRef.value}`);
};

buttonCreateRef.addEventListener('click', inputApprove);

const destroyBoxes = () => {
  boxesListRef.innerHTML = ' ';
};

buttonDestroyRef.addEventListener('click', destroyBoxes);

let defaultWidth = 20;
let defaultHeight = 20;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxesListRef.insertAdjacentHTML(
      'beforeend',
      `<div style =" background-color: ${getRandomHexColor()}; width : ${(defaultWidth += 10)}px; height:${(defaultHeight += 10)}px;"></div>`
    );
  }
}
