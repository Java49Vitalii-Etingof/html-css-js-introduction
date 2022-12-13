import { showErrorMessage } from "./errorMessage.js";
export class BookForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #pageInputElement;
    #dateErrorElement;
    #pageErrorElement;
    #minPage;
    #maxPage;
    #minDate;
    #maxDate;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#pageInputElement = document.getElementById(params.idPageInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pageErrorElement = document.getElementById(params.idPageError);
        this.#minPage = params.minPage;
        this.#maxPage = params.maxPage;
        this.#minDate = params.minDate;
        this.#maxDate = getMaxDate();
        this.onChange();
    }
    addSubmitHandler(processBookFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const book = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(book)
            processBookFun(book);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validatePublishingDate(event.target);
        })
        this.#pageInputElement.addEventListener("change", (event) => {
            this.validatePage(event.target);
        })
       
    }
   validatePage(element) {
        const value = +element.value;
        if (value < this.#minPage || value > this.#maxPage) {
            const message = value < this.#minPage ? `page must be ${this.#minPage} or greater`
                : `page must be ${this.#maxPage} or less`;
            showErrorMessage(element, message, this.#pageErrorElement);
        }
    
    }
    validatePublishingDate(element) {
        const value = new Date(element.value);
        if (value < this.#minDate || value > this.#maxDate) {
            const message = value < this.#minDate ? `date must be ${this.#minDate} or greater`:
                 `date must be ${this.#maxDate} or less`;
            showErrorMessage(element, message, this.#dateErrorElement) ;    
    
        }
    
    }
    

}





function getMaxDate() {
    return new Date();
}