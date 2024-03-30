/**
 * Initializes form validation handlers and UI updates for a registration form.
 * Utilizes various DOM elements to manage user input and feedback.
 */
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

/**
 * Sets the message in the form's message container.
 *
 * @param {string} text - The message text to display.
 * @param {string} color - The color to use for the message text and container border.
 */
function setMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
  messageContainer.style.borderColor = color;
}

/**
 * Sets the border color of a given form field.
 *
 * @param {HTMLElement} field - The form field whose border color will be set.
 * @param {string} color - The color to apply to the field's border.
 */
function setFieldBorderColor(field, color) {
  field.style.borderColor = color;
}

/**
 * Checks if the two password fields match.
 *
 * @returns {boolean} True if the passwords match, false otherwise.
 */
function passwordsMatch() {
  return password1El.value === password2El.value;
}

/**
 * Validates that the two entered passwords match and updates UI accordingly.
 *
 * @returns {boolean} True if the passwords match and the UI has been updated, false otherwise.
 */
function validatePasswords() {
  if (passwordsMatch()) {
    setFieldBorderColor(password1El, 'green');
    setFieldBorderColor(password2El, 'green');
    return true;
  } else {
    setFieldBorderColor(password1El, 'red');
    setFieldBorderColor(password2El, 'red');
    setMessage('Make sure passwords match.', 'red');
    return false;
  }
}

/**
 * Validates the entire form for completeness and correctness.
 * Leverages the Constraint Validation API and custom validations.
 *
 * @returns {boolean} True if the form is valid, false otherwise.
 */
function validateForm() {
  // Using Constraint API to check form validity
  if (!form.checkValidity()) {
    setMessage('Please fill out all fields.', 'red');
    return false;
  }

  return validatePasswords();
}

/**
 * Stores the form data by logging it to the console.
 * Placeholder for actual storage logic.
 */
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user); // Placeholder for actual storage logic
}

/**
 * Handles the form submission event.
 * Validates the form data, stores it if valid, and updates the UI.
 *
 * @param {Event} e - The submit event object.
 */
function processFormData(e) {
  e.preventDefault();

  if (validateForm()) {
    storeFormData();
    setMessage('Successfully Registered!', 'green');
  }
}

// Attaches the submit event listener to the form.
form.addEventListener('submit', processFormData);
