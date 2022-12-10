

const inputElements = document.querySelectorAll(".form-class [name]");
const ACTIVE = "active";
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_DATE = '1980-01-01';
const MAX_DATE = 
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";

const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const numberOfPagesErrorElement = document.getElementById("numberOfPages_error");
const publishingDateErrorElement = document.getElementById("publishingDate_error");
function showSection(index) {
     buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    // if (index == 1) {
    //     const employees = company.getAllEmployees();
    //     employeesListElement.innerHTML = getEmployeeItems(employees);
    // }
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
    // company.hireEmployee(employee);
    
}
function onChange(event) {
    if (event.target.name == "numberOfPages") {
        validateNumberOfPages(event.target)
    }
    else if (event.target.name == "publishingDate") {
        validatePublishingDate(event.target)
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


