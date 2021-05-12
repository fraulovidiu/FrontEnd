
var form = document.getElementById('form');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var textarea = document.getElementById('textarea');
var error = document.getElementById('error');
var firstname_error = document.getElementById('firstNameError');
var lastname_error = document.getElementById('lastNameError');
var message_error = document.getElementById('messageError');
var btn = document.getElementById('btn');
var btn = document.getElementById('contact-form');
var banner = document.getElementById('banner');
var yesNo = document.getElementById('yes');
var yesNo = document.getElementById('no');
var yesNoError = document.getElementById('yesNoError');

firstName.addEventListener('input', checkFirstName);

function checkFirstName(e) {
	firstNameValue = e.target.value;
   console.log(firstNameValue);
   
   var letters = /^[A-Za-z]+$/;
   if (firstNameValue.match(letters)) {
      if (firstNameValue.length > 0 && firstNameValue.length <= 10) {
         firstName.style.border = '2px solid green';
         ifValid = true;
      } else if (firstNameValue.length > 10) {
         firstName.style.border = '2px solid red';
         firstNameError.textContent = 'First Name should have max 10 characters';
         ifValid = false;
      } else if (firstNameValue.length == "") {
         firstName.style.border = '2px solid red';
         ifValid = false;
      }
   } else {
      firstName.style.border = '2px solid red';
      firstNameError.textContent = 'Name must contains only characters';
   }
}

lastName.addEventListener('input', checkLastName);

function checkLastName(e) {
	lastNameValue = e.target.value;
	console.log(lastNameValue);

   var letters = /^[A-Za-z]+$/;
   if (lastNameValue.match(letters)) {
      if (lastNameValue.length > 0 && lastNameValue.length <= 10) {
         lastName.style.border = '2px solid green';
         ifValid = true;
      } else if (lastNameValue.length > 10) {
         lastName.style.border = '2px solid red';
         lastNameError.textContent = 'First Name should have max 10 characters';
         ifValid = false;
      } else if (lastNameValue.length == "") {
         lastName.style.border = '2px solid red';
         ifValid = false;
      }
   } else {
      lastName.style.border = '2px solid red';
      lastNameError.textContent =
         'Name must contains only characters';
         ifValid = false;
   }
}

textarea.addEventListener('input', checkTextarea);

function checkTextarea(e) {
	textareaValue = e.target.value;
   console.log(textarea);

      if (textareaValue.length >= 20) {
      textarea.style.border = '2px solid green';
      ifValid = true;
      } else if (textareaValue.length > 1000) {
      textarea.style.border = '2px solid red';
      messageError.textContent = 'Message should contain max 1000 characters';
      isValid = false;
      } else if (firstNameValue.length == "") {
         firstName.style.border = '2px solid red';
         ifValid = false;
      } else {
         textarea.style.border = '2px solid red';
         messageError.textContent = 'Message should contain at least 20 characters';
         ifValid = false;
      }
   }

btn.addEventListener('click', submitForm );
var nameHere = document.getElementById('nameHere');

function submitForm(e) {
   e.target = 'checkFirstName';
   e.target = 'checkLastName';
   e.target = 'checkTextarea';
   e.target = 'yesNo';
   console.log(btn);

   if(firstName.value && lastName.value && textarea.value) {
      banner.style.visibility = 'visible';
      banner.innerHTML += firstName.value;
   }

}
