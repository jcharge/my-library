
let myLibrary = [];

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

    // a book card delete button that deletes itself on screen and in the myLibrary array
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Remove Book';
    infoRead.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => {
        for (i = 1; i < libraryContainer.childElementCount; i++) {
            if (libraryContainer.children[i].contains(e.target)) {
                libraryContainer.removeChild(libraryContainer.children[i]);
                myLibrary.splice(i - 1, 1)
            }
        }

    })

    if (infoReadText.textContent == 'Have you read this book? YES.') {
        infoReadText.textContent = 'Read';
        readStatus = true
    } else {
        infoReadText.textContent = 'Unread'
        readStatus = false}
    
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
readInfo.textContent += 'Have you read this book? YES.';

readInfo.addEventListener('click', (e) => {
    if (readInfo.textContent == 'Have you read this book? YES.') {
        readInfo.textContent = 'Have you read this book? NO.';
    } else {
        readInfo.textContent = 'Have you read this book? YES.';
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
// A local save function

let saveBtn = document.querySelector('#local-save-button')
saveBtn.addEventListener('click', (e) => {
    save()
})
// A clear save button
let clearBtn = document.querySelector('#clear-all-button');
clearBtn.addEventListener('click', (e) => {
    localStorage.clear();
})

// A function that takes the array info and displays it on screen
// works in tandem with the save button
let bookList = localStorage.getItem('myBookList')
function myLibraryFunction() {
    
    let libraryBooks = JSON.parse(bookList)

    for (i = 0; i < libraryBooks.length; i ++) {

    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    libraryContainer.appendChild(bookCard);

    let infoTitle = document.createElement('div');
    infoTitle.classList.add('card-info');
    let infoTitleText = document.createElement('p');
    infoTitleText.classList.add('info-text');
    infoTitleText.textContent += libraryBooks[i].title;
    bookCard.appendChild(infoTitle);
    infoTitle.appendChild(infoTitleText);

    let infoAuthor = document.createElement('div');
    infoAuthor.classList.add('card-info');
    let infoAuthorText = document.createElement('p');
    infoAuthorText.classList.add('info-text');
    infoAuthorText.textContent += libraryBooks[i].author;
    bookCard.appendChild(infoAuthor);
    infoAuthor.appendChild(infoAuthorText);

    let infoRead = document.createElement('div');
    infoRead.classList.add('card-info');
    let infoReadText = document.createElement('p');
    infoReadText.classList.add('info-text');
    if (libraryBooks[i].read) {
        infoReadText.textContent += 'Read';
    } else {infoReadText.textContent += 'Unread'};
    bookCard.appendChild(infoRead);
    infoRead.appendChild(infoReadText);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Remove Book';
    infoRead.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => {
        for (i = 1; i < libraryContainer.childElementCount; i++) {
            if (libraryContainer.children[i].contains(e.target)) {
                libraryContainer.removeChild(libraryContainer.children[i]);
                libraryBooks.splice(i - 1, 1)
            }
        }

    })
    }
}

function save() {
    localStorage.setItem('myBookList', JSON.stringify(myLibrary))
}
myLibraryFunction();