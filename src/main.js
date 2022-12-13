import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_DATE = new Date('1980-01-01')


const ACTIVE = "active"




const pageFormErrorElement = document.getElementById("salary_form_error");
const booksListElement = document.getElementById("books-all");
const booksPageListElement = document.getElementById("books-page");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */



const library = new Library();





const bookForm = new BookForm({idForm: "book_form", idDateInput: "date_input",
idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
 minDate: MIN_DATE, minPage: MIN_PAGE, maxPage: MAX_PAGE})
 bookForm.addSubmitHandler((book) => library.hireBook(book))
/************************************************************* */

/********************************************************************************** */



let pageFrom = 0;
let pageTo = 0;
function onSubmitPage(event) {
    event.preventDefault();
    const books = library.getBooksByPage(pageFrom, pageTo);
    booksPageListElement.innerHTML = getBookItems(books);


   
}
function onChangePageFrom(event) {
    const value = +event.target.value;
    if (pageTo && value >= pageTo) {
        showErrorMessage(event.target, "Page 'from' must be less than Page 'to'",
        pageFormErrorElement);
    } else {
        pageFrom = value;
    }
}
function onChangePageTo(event) {
    const value = +event.target.value;
    if (pageFrom && value < pageFrom) {
        showErrorMessage(event.target, "Page 'To' must be greater than Page 'From'",
        pageFormErrorElement);
    }
    pageTo = value;
}
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
              <div class="books-item-container">
                 <p class="books-item-paragraph">Name: ${e.book_name} </p>
                 <p class="books-item-paragraph">Author: ${e.author_name} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Publishing date: ${e.publishingDate}</p>
                 <p class="books-item-paragraph">Pages: ${e.page}</p>
              </div>
          </li>`).join('');
}


window.showSection = showSection;
window.onChangePageTo = onChangePageTo;
window.onChangePageFrom = onChangePageFrom;
window.onSubmitPage = onSubmitPage;

