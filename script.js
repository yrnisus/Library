let myLibrary = [];

function Book(title, author, numOfPages, haveRead) {
 this.title = title;
 this.author = author;
 this.numOfPages = numOfPages;
 this.haveRead = haveRead;
}


const exampleBook = new Book(
  'The Catcher In The Rye',
  'J. D. Salinger',
  234,
  false);

function addBookToLibrary() {
  // do stuff here
}


const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.close-modal-btn');


modalBtn.addEventListener('click', function() {
  modalBg.classList.add('bg-active');
})

modalBg.addEventListener('click', e => {
  if(!(e.target !== e.currentTarget)) {
    if(modalBg.classList.contains('bg-active'))
  modalBg.classList.remove('bg-active');
  }
});

modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
})