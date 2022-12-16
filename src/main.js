import { Library } from "./data/library.js";
import { AuthorForm } from "./ui/AuthorForm.js";
import { BookForm } from "./ui/bookForm.js";
import { PagesForm } from "./ui/PagesForm.js";

const MIN_PAGE = 50;
const MAX_PAGE = 2000;
const MIN_DATE = new Date('1980-01-01')
const ACTIVE = "active"
const booksPageListElement = document. getElementById("books-page");
const booksListElement = document.getElementById("books-all");
const booksAuthorListElement = document.getElementById("books-author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

/************************************************************************** */
const library = new Library();

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
    minDate: MIN_DATE, minPage: MIN_PAGE, maxPage: MAX_PAGE
})
bookForm.addSubmitHandler((book) => library.hireBook(book))

/********************************************************************************** */
const paramsPages = {
    idForm: "page-form", idPageFromInput: "pageFrom",
    idPageToInput: "pageTo", idErrorMessage: "page_form_error"
}
const pagesForm = new PagesForm(paramsPages);
pagesForm.addSubmitHandler((pagesObj) => {
const books = library.getBooksByPage(pagesObj.pageFrom, pagesObj.pageTo);
booksPageListElement.innerHTML = getBookItems(books);

})

//********************************************************************************* */
    const paramsAuthor = {
        idForm: "author-form", idAuthorInput: "author"
    }
    const authorForm = new AuthorForm(paramsAuthor);
    authorForm.addSubmitHandler((author) => {
        const books = library.getBooksByAuthor(author);
        booksAuthorListElement.innerHTML = getBookItems(books);   
    })

//********************************************************************************* */
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
    return books.map(e =>
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




