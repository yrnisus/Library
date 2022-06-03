let myLibrary = [];

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
const readToggle = document.querySelector('.read-container');

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
              <img class='read-icon' src="${bookImg}"></div>
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

start();