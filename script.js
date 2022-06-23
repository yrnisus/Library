let myLibrary = [];

// change to class
// function Book(title, author, numOfPages, haveRead, index) {
//   this.title = title;
//   this.author = author;
//   this.numOfPages = numOfPages;
//   this.haveRead = haveRead;
//   this.index = index;
//  }

class Book {
  constructor(title, author, numOfPages, haveRead, index) {
    this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.haveRead = haveRead;
  this.index = index;
  }
}


const exampleBook = new Book(
  'The Catcher In The Rye',
  'J. D. Salinger',
  234,
  'Yes',
  0);

myLibrary[0] = exampleBook;


// const modalBtn = document.querySelector('.modal-btn');
const modalBtnMobile = document.querySelector('.modal-btn-mobile');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.close-modal-btn');
const cardContainer = document.querySelector('.card-container');
const addBookBtn = document.querySelector('.add-book-btn');
const readToggle = document.querySelector('.read-container');

// Event Listeners


// Opens modal
// modalBtn.addEventListener('click', function() {
//   modalBg.classList.add('bg-active');
// })

modalBtnMobile.addEventListener('click', function() {
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

// Form
const form = document.getElementById('form');

form.addEventListener('submit', function() {
  addBookToLibrary();
})

function addCard (obj) {
  generateDummyCard();
  // create a new div element
  let newCard = document.createElement('div');
  newCard.classList.add('card-bg');
  // Sets the image of the book based on haveRead
  let bookImg = getBookImg(obj);
  let readClass = getReadClass(obj.haveRead);

  // fill with card format
  newCard.innerHTML = `
        <div class="card-text">
          <div class="card-title"> ${obj.title} </div>
          <div class="card-author">By: ${obj.author}</div>
          <div class="card-numOfPages">${obj.numOfPages} Pages</div>
          <div class="read-container-bg">
            <div class='read-container ${readClass}'>
              <div class="card-read">Read: ${obj.haveRead}</div>
              <img class='read-icon' src="${bookImg}">
            </div>
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

  // Adds read toggle to new cards
  newCard.querySelector('.read-container').addEventListener('click', function() {

    let readStatus = toggleRead(index);
    let newBookImg = getBookImg(obj);

    newCard.querySelector('.card-read').innerHTML = `Read: ${readStatus}`
    console.log(obj.haveRead);
    newCard.querySelector('.read-icon').src = `${newBookImg}`;
    toggleClass(newCard.querySelector('.read-container'));
  });

cardContainer.appendChild(newCard);
cardContainer.appendChild(generateDummyCard());
let dummyAddBtn = document.querySelector('.dummy-card-add');
    if(dummyAddBtn)
    dummyAddBtn.addEventListener('click', function() {
      modalBg.classList.add('bg-active');
    })
}

// Works

function clearModal() {
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

function toggleClass(div) {
  if(div.classList.contains('read')) {
  div.classList.remove('read');
  div.classList.add('not-read'); 
}
  else {
    div.classList.remove('not-read');
    div.classList.add('read'); 
  }
}

function getReadClass(haveRead) {
  if(haveRead === 'Yes') 
    return 'read'
  else
    return 'not-read'
}


function toggleRead(index) {
  let readStatus = "";
  if(myLibrary[index].haveRead === 'Yes') 
   readStatus = 'No'
  else
  readStatus = 'Yes'
  myLibrary[index].haveRead = readStatus;
  return readStatus;
}

function getBookImg(obj) {
  if(obj.haveRead === 'Yes')
    return './images/book-check-outline.png'
  else
    return './images/book-cancel-outline.png'
}

function removeCard(card) {
  card.remove();
}

function start() {
  myLibrary.forEach((e, index) => {
    addCard(e);
  })
}

function generateDummyCard() {
  let dummyCard = document.querySelector('.dummy-card');
  if(dummyCard)
    dummyCard.remove();

    dummyCard = document.createElement('div');
    dummyCard.innerHTML = '<svg class="dummy-card-add" style="width:200px;height:200px" viewBox="0 0 24 20"> <path fill="currentColor" d="M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /> </svg> <br> Add Book'
    dummyCard.classList.add('card-bg');
    dummyCard.classList.add('dummy-card');

  // dummyAddBtn.addEventListener('click', function() {
  //   alert();
  // })
  
  return dummyCard;
}


start();