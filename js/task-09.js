function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// --------------------------------------------------------------------------------------- //

const bodyRef = document.querySelector('body');
const butttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

butttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent = `${bodyRef.style.backgroundColor}`;
});
