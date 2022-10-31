const formRef = document.querySelector('.login-form');

const formFunction = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    window.alert('Please make sure all fields are filled');
  } else {
    const infObj = {
      email: email.value,
      password: password.value,
    };
    console.log(infObj);
    event.currentTarget.reset();
  }
};

formRef.addEventListener('submit', formFunction);
