const libraryEl = document.getElementById('library');
const firstInputEl = document.getElementById('book-name');
const secondInputEl = document.getElementById('book-author');
const thirdInputEl = document.getElementById('book-code');
let tableBody = document.getElementById('listItems');
let list = document.getElementById('list');
const itemEl = document.querySelector('.item');

class Book {
constructor() {
this.firstInputEl = firstInputEl;
this.secondInputEl = secondInputEl;
this.thirdInputEl = thirdInputEl;
this.deleteButton = '<i class="fas fa-trash"></i>';
}
}

class UI {
constructor() {
this.allElementsAreValid = true;
this.submitNumbers = 0;
}

showError(el, message) {
el.parentElement.classList.add('error');
const smallEl = el.parentElement.querySelector('small');
smallEl.innerHTML = message;
}

showSuccess(el) {
el.parentElement.classList.remove('error');
el.parentElement.classList.add('success');
}

showSubmitSuccessMessage() {
if (this.allElementsAreValid && this.submitNumbers == 0) {
let successMessage = document.createElement('p');
successMessage.classList.add('success');
successMessage.innerHTML =
'You just added ' +
firstInputEl.value + ' ' + 'by ' + secondInputEl.value + ' ' +
'!';
let divDetails = document.getElementById('details');
libraryEl.insertBefore(successMessage, divDetails);

setTimeout(() => {
successMessage.remove();
}, 2000);
this.submitNumbers++;
}
}

addBook(book) {

let table = document.getElementById('list');

let rowCount = table.rows.length;
let row = table.insertRow(rowCount);
row.id = rowCount;

let cell1 = row.insertCell(0);
let element1 = document.createElement("input");
element1.type = "text";
element1.name = "txtbox[]";
element1.value = book.firstInputEl.value;
cell1.appendChild(element1);

let cell2 = row.insertCell(1);
let element2 = document.createElement("input");
element2.type = "text";
element2.name = "td";
element2.value = book.secondInputEl.value;
cell2.appendChild(element2);

let cell3 = row.insertCell(2);
let element3 = document.createElement("input");
element3.type = "text";
element3.name = "td";
element3.value = book.thirdInputEl.value;
cell3.appendChild(element3);

let cell4 = row.insertCell(3);
let element4 = document.createElement("input");
element4.type = "button";
element4.name = "td";
element4.value = 'Delete';
element4.onclick = function () {
let row = document.getElementById(rowCount);
row.parentNode.removeChild(row);
}
cell4.appendChild(element4);
}

clearFields() {
libraryEl.reset();
firstInputEl.parentElement.classList.remove('success');
secondInputEl.parentElement.classList.remove('success');
thirdInputEl.parentElement.classList.remove('success');
}
}

libraryEl.addEventListener('submit', (e) => {
e.preventDefault();

let ui = new UI();
let book = new Book();

if (firstInputEl.value === '') {
ui.showError(firstInputEl, 'Please insert a book name');
ui.allElementsAreValid = false;
} else {
ui.showSuccess(firstInputEl);
book.firstInputEl = firstInputEl;
}

if (secondInputEl.value === '') {
ui.showError(secondInputEl, 'Please insert an author name');
ui.allElementsAreValid = false;
} else {
ui.showSuccess(secondInputEl);
book.secondInputEl = secondInputEl;
}

if (thirdInputEl.value === '') {
ui.showError(thirdInputEl, 'ISBN Number required');
ui.allElementsAreValid = false;
} else {
ui.showSuccess(thirdInputEl);
book.thirdInputEl = thirdInputEl;
}

ui.addBook(book);

ui.showSubmitSuccessMessage();
ui.clearFields();
})