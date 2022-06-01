let myLibrary = [];

function Book(title, author, numOfPages, haveRead) {
 this.title = title;
 this.author = author;
 this.numOfPages = numOfPages;
 this.haveRead = haveRead;
}

function addBookToLibrary() {
  // do stuff here
}


const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.close-modal-btn');


modalBtn.addEventListener('click', function() {
  modalBg.classList.add('bg-active');
})

modalBg.addEventListener('click', function() {
  if(modalBg.classList.contains('bg-active'))
  modalBg.classList.remove('bg-active');
})

modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
})