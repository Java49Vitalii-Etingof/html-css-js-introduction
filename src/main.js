

const inputElements = document.querySelectorAll(".form-class [name]");
const ACTIVE = "active";

const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu*");

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

