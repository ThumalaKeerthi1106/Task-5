// Find the form element by its id
const form = document.getElementById('contactForm');

// Find error and success message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Email regex: simple and good for basic checks
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Listen for form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 1) Stop normal form submission

  // 2) Get and trim values (remove extra spaces)
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // 3) Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  // 4) Validation flag (true if all checks pass)
  let isValid = true;

  // 5) Name must not be empty
  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // 6) Email must not be empty and must match regex
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email (e.g. you@domain.com)';
    isValid = false;
  }

  // 7) Message must not be empty
  if (message === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  // 8) If all valid, show success and reset form
  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset(); // clear fields
  }
});
