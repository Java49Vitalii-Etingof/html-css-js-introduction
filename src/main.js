

const inputElements = document.querySelectorAll(".form-class [name]");

const ACTIVE = "active";
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_DATE = new Date('1980-01-01');
const MAX_DATE = new Date();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const booksAuthorListElement = document.getElementById("authorBooks");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const numberOfPagesErrorElement = document.getElementById("numberOfPages_error");
const publishingDateErrorElement = document.getElementById("publishingDate_error");
const booksListElement = document.getElementById("books-all");
//*************************************************************************** */
const library = new Library();
function Library() {
    this.books = [];
}
Library.prototype.hireBook = function(book) {
    this.books.push(book);
}
Library.prototype.getAllBooks = function(){
    return this.books;
}
Library.prototype.getBooksAuthor = function(){
    return this.books.filter(e => e.author == authorBooks);
    
 
  
}

//***************************************************************************** */
function showSection(index) {
     buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
     if (index == 1) {
     const books = library.getAllBooks();
     booksListElement.innerHTML = getBookItems(books);
     }
}
function getBookItems(books) {
    return books.map (e =>
        `<li class="books-item">
            <div class = "books-item-conteiner">
                <p class ="books-item-paragraph">Book title: ${e.book_title} </p>
                <p class ="books-item-paragraph">Author: ${e.author} </p>
                <p class ="books-item-paragraph">Genre: ${e.genre} </p>
                <p class ="books-item-paragraph">Number of pages: ${e.numberOfPages} </p>
                <p class ="books-item-paragraph">Publishing date: ${e.publishingDate} </p>
            </div>

        </li>`).join('');
        
    }


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
     library.hireBook(book);   
}
//const author = '';

function onSubmitAuthor(event) {
    event.preventDefault();
    const books = library.getBooksAuthor(authorBooks);
    booksAuthorListElement.innerHTML = getBookItems(books);
}
function onChange(event) {
    if (event.target.name == "numberOfPages") {
        validateNumberOfPages(event.target)
    }
    else if (event.target.name == "publishingDate") {
        validatePublishingDate(event.target)
    }
}
    function validatePublishingDate(element) {
        const value = new Date(element.value);
        if (value < MIN_DATE || value > MAX_DATE) {
        const message = value < MIN_DATE ? `Publishing date must be ${MIN_DATE} or greater`:
        `Publishing date must be ${MAX_DATE} or less`;
        showErrorMessage(element, message, publishingDateErrorElement);    
        }
    }

function validateNumberOfPages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = value < MIN_PAGES ? `Number of the pages must be ${MIN_PAGES} or greater`: 
        `Number of the pages must be ${MAX_PAGES} or less`; 
        showErrorMessage(element, message, numberOfPagesErrorElement );
    }
}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() =>{
        element.classList.remove(ERROR_CLASS);
        element.value = '';
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);

    
}


