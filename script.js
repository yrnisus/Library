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
  'Read');

myLibrary[0] = exampleBook;


const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.close-modal-btn');
const cardContainer = document.querySelector('.card-container');
const addBookBtn = document.querySelector('.add-book-btn');

// Event Listeners


// Opens modal
modalBtn.addEventListener('click', function() {
  modalBg.classList.add('bg-active');
})

// Close modal on click outside of modal
modalBg.addEventListener('click', e => {
  if(!(e.target !== e.currentTarget)) {
    if(modalBg.classList.contains('bg-active'))
  modalBg.classList.remove('bg-active');
  }
});
// Close Modal on X 
modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
})

// This is dumb
// addBookBtn.addEventListener('click', function() {
//   addBookToLibrary();
// })

// Removes book card
const elements = document.querySelectorAll(".close-card-btn");
  elements.forEach(function (e) {
    e.addEventListener('click', function() {
     console.log('close');
    })
  });

// Add new book
function addBookToLibrary() {
  const newBook = new Book(
    document.getElementById("newBookTitle").value,
    document.getElementById("newBookAuthor").value,
    document.getElementById("newBookPages").value,
    document.getElementById("haveRead").value);
    
    addCard(newBook);
    clearModal();
}

// Form
const form = document.getElementById('form');

form.addEventListener('submit', function() {
  addBookToLibrary();
})


function addCard (obj) {
  // create a new div element
  let newCard = document.createElement('div');
  newCard.classList.add('card-bg');
  // fill with card format
  newCard.innerHTML = `
        <div class="card-text">
          <div class="card-title"> ${obj.title} </div>
          <div class="card-author">By: ${obj.author}</div>
          <div class="card-numOfPages">${obj.numOfPages} Pages</div>
          <button class="card-read">${obj.haveRead}</button>
        </div>
       <div class="close-card-btn">X</div>
      </div>`;
      // Adds event listener to remove card to new cards
  newCard.querySelector('.close-card-btn').addEventListener('click', function() {
    console.log('close');
});
cardContainer.appendChild(newCard);
}


function clearModal() {
    modalBg.classList.remove('bg-active');
    document.getElementById("newBookTitle").value = '';
    document.getElementById("newBookAuthor").value = '';
    document.getElementById("newBookPages").value = '';
    document.getElementById("haveRead").value = '';
}

