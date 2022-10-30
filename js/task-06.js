const inputRef = document.querySelector('#validation-input');

const validationFunc = () => {
  if (inputRef.value.length.toString() === inputRef.dataset.length) {
    inputRef.classList.replace('invalid', 'valid');
  } else {
    inputRef.classList.add('invalid');
  }
};

inputRef.addEventListener('blur', validationFunc);
