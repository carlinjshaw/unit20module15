const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    renderLastRegistered();
  }
});
