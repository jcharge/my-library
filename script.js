
const myLibrary = [];

function Book() {

};

// a function to add the title, author, and read status of a book
// to the myLibrary array
function addBookToLibrary(title, author, read) {
    myLibrary.push({title, author, read});
}

let overallContainer = document.querySelector('#overall-container');
let libraryContainer = document.querySelector('#library-container');
let addBookBtn = document.querySelector('#add-book-button');

addBookBtn.addEventListener('click', (e) => {
    subForm()
})

// a function that adds a new 'book card' to the library container
// and adds three 'info cards' to itself(the book card)
function newCard() {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    libraryContainer.appendChild(bookCard);

    let infoTitle = document.createElement('div');
    infoTitle.classList.add('card-info');
    let infoTitleText = document.createElement('p');
    infoTitleText.classList.add('info-text');
    infoTitleText.textContent += titleInfo.value;
    bookCard.appendChild(infoTitle);
    infoTitle.appendChild(infoTitleText);

    let infoAuthor = document.createElement('div');
    infoAuthor.classList.add('card-info');
    let infoAuthorText = document.createElement('p');
    infoAuthorText.classList.add('info-text');
    infoAuthorText.textContent += authorInfo.value;
    bookCard.appendChild(infoAuthor);
    infoAuthor.appendChild(infoAuthorText);

    let infoRead = document.createElement('div');
    infoRead.classList.add('card-info');
    let infoReadText = document.createElement('p');
    infoReadText.classList.add('info-text');
    infoReadText.textContent += readInfo.textContent;
    bookCard.appendChild(infoRead);
    infoRead.appendChild(infoReadText);

    if (infoReadText.textContent == 'Read') {
        readStatus = true
    } else {readStatus = false}
    
    addBookToLibrary(infoTitleText.textContent, infoAuthorText.textContent, readStatus)
}

// These are the items that go into subForm()
let subInfo = document.querySelector('#submit-form');

let cancelBtn = document.createElement('button');
cancelBtn.textContent += 'Cancel';

cancelBtn.addEventListener('click', (e) => {
    removeSubForm();
});

let titleInfo = document.createElement('textarea');
titleInfo.textContent += 'Title';
titleInfo.classList.add('submission-text');

let authorInfo = document.createElement('textarea');
authorInfo.textContent += 'Author';
authorInfo.classList.add('submission-text');

let readInfo = document.createElement('button');
readInfo.textContent += 'Read';

readInfo.addEventListener('click', (e) => {
    if (readInfo.textContent == 'Read') {
        readInfo.textContent = 'Unread';
    } else {
        readInfo.textContent = 'Read';
    }
})

let submissionBtn = document.createElement('button');
submissionBtn.textContent += 'Submit';

submissionBtn.addEventListener('click', (e) => {
    title = titleInfo.textContent
    author = authorInfo.textContent
    newCard();
    removeSubForm();
})

// A function that makes a submission form appear. It has text areas for the user
// to input the title, author, and whether or not they read the book. It also
// has a cancel button to remove the form and a submit button to move the info into the library
function subForm() {
    subInfo.classList.add('submit-info')
    subInfo.appendChild(titleInfo);
    subInfo.appendChild(authorInfo);
    subInfo.appendChild(readInfo);
    subInfo.appendChild(submissionBtn);
    subInfo.appendChild(cancelBtn);
}

// a function to remove the submission form from the screen
function removeSubForm() {
    subInfo.classList.remove('submit-info');
    subInfo.removeChild(titleInfo);
    subInfo.removeChild(authorInfo);
    subInfo.removeChild(readInfo);
    subInfo.removeChild(submissionBtn);
    subInfo.removeChild(cancelBtn);
}