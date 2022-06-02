let myLibrary = [];

// function Book(title, author, numOfPages,index) {
//  this.title = title;
//  this.author = author;
//  this.numOfPages = numOfPages;
//  this.index = index;
// }


// const exampleBook = new Book(
//   'The Catcher In The Rye',
//   'J. D. Salinger',
//   234,
//   0);


// Not working Pages

function Book(title, author, numOfPages, haveRead, index) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.haveRead = haveRead;
  this.index = index;
 }

const exampleBook = new Book(
  'The Catcher In The Rye',
  'J. D. Salinger',
  234,
  'Yes',
  0);

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

addBookBtn.addEventListener('click', function() {
  addBookToLibrary();
})


function checkInputs() {
  document.getElementById('newBookTitle').validity.valid
  document.getElementById('newBookAuthor').validity.valid
  document.getElementById('newBookPages').validity.valid
  // document.getElementById('your_input_id').validity.valid
}

// Add new book
function addBookToLibrary() {
  const newBook = new Book(
    document.getElementById("newBookTitle").value,
    document.getElementById("newBookAuthor").value,
    document.getElementById("newBookPages").value,
    document.getElementById("haveRead").value,
    // document.querySelector('input[name="haveRead"]:checked').value,
    myLibrary.length);
    
    myLibrary.push(newBook);
    addCard(newBook);
    clearModal();
}

// // Form
// const form = document.getElementById('form');

// form.addEventListener('submit', function() {
//   addBookToLibrary();
// })


//           <div class="card-read">Read: ${obj.haveRead}</div>

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
          <div class="card-read">Read: ${obj.haveRead}</div>
        </div>
       <div class="close-card-btn">X</div>
      </div>`;
      // Adds event listener to remove card to new cards
  let index = obj.index;
  newCard.querySelector('.close-card-btn').addEventListener('click', function() {
    console.log('close');
    removeBookFromLibrary(index);
    removeCard(newCard);
});
cardContainer.appendChild(newCard);
}

// Works

function clearModal() {
  console.log('clear');
    modalBg.classList.remove('bg-active');
    document.getElementById("newBookTitle").value = '';
    document.getElementById("newBookAuthor").value = '';
    document.getElementById("newBookPages").value = '';
    document.getElementById("haveRead").value = 'Yes';
}

function removeBookFromLibrary(index) {
  // removes the element at index from book array
if (index > -1) {
  console.log(myLibrary[index]);
  myLibrary.splice(index, 1); // 2nd parameter means remove one item only
  }
// changes the index value of everyt element to index after an element has been deleted
  myLibrary.forEach((e, index) => {
    e.index = index;
  })
}


function removeCard(card) {
  card.remove();
}

function start() {
  myLibrary.forEach((e, index) => {
    addCard(e);
  })
}

start();