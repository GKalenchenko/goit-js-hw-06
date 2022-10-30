const valueRef = document.querySelector('#value');

let counterValue = 0;

const buttonDecRef = document.querySelector('[data-action= decrement]');
const buttonIncRef = document.querySelector('[data-action= increment]');

buttonDecRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

buttonIncRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
