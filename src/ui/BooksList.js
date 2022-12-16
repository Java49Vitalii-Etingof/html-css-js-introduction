export class BooksList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showBooks(books) {
        this.#listElement.innerHTML = getBookItems(books);
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
