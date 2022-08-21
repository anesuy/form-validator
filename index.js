const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');

//Show input error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText= message;
}

//Show input success

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// is valid email

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Email is not valid');
}


//check required fields

function checkRequired(arrayInputs) {
  arrayInputs.forEach(function(input){
    input.value.trim() === "" ? showError(input, `${getFieldName(input)} is required`) : showSuccess(input);
  })
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  input1.value !== input2.value && showError(input2, 'Passwords do not match');
}

//get fieldName

 function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Add event listeners

form.addEventListener('submit', function(e) {
  e.preventDefault();

  //username.value === "" ?  showError(username, 'Username is required') : showSuccess(username);

  //email.value === "" ? showError(email, 'Email is required') : showSuccess(email);

  //password.value === "" ? showError(password, 'Password is required') : showSuccess(password);

  //password2.value === "" ? showError(password2, 'Password is required') : showSuccess(password2);

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

});