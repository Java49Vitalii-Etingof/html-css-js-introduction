export class Library {
    constructor() {
        this.books = [];
    }
    hireBook(book) {
        book.salary = +book.page;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksByPage(pageFrom, pageTo) {
        return this.books.filter(e => e.page >= pageFrom && e.page < pageTo);
    }
    getBooksByAuthor(author) {
        return this.books.filter(e => e.author_name == author);
    }
}