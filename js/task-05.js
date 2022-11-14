const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

function callback(event) {
  spanRef.textContent = event.currentTarget.value;
  if (inputRef.value === '') {
    spanRef.textContent = 'Anonymus';
  }
}

inputRef.addEventListener('input', callback);
