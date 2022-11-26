
function createRandomEmployees(nEmployees, idDigits, minBirthYear, maxBirthYear, minSalary, maxSalary) {
  let employees = [];
  let uniqueIds = [];
  minId = Math.pow(10, idDigits - 1);
  maxId = Math.pow(10, idDigits);
  for (let i = 0; i < nEmployees; i++) {
    let id = getRandomId(minId, maxId, uniqueIds);
    let name = 'name' + id;
    let birthYear = getRandomIntegerValue(minBirthYear, maxBirthYear);
    let salary = getRandomIntegerValue(minSalary, maxSalary);
    employees.push(createEmployee(id, name, birthYear, salary));
  }
  return employees;
}

function getRandomId(min, max, uniqueIds) {
  id = uniqueIds[0];
  do {
    id = getRandomIntegerValue(min, max);
  }
  while (!uniqueIds.every(a => a != id))
  uniqueIds.push(id)
  return id;
}
function getRandomIntegerValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function createEmployee(id, name, birthYear, salary) {
  return { id, name, birthYear, salary };
}
employees = createRandomEmployees(8, 4, 1960, 2000, 10000, 20000,);
console.log('Employee database:', employees);
//********************************************************************
function getAverageAge(employees) {
  let currentYear = (new Date()).getFullYear();
  let res = Math.round(employees.reduce((sum, employees) => {
    return sum + currentYear - employees.birthYear;
  }, 0) / employees.length
  )
  return res;
}
let averageAge = getAverageAge(employees);
console.log('average age of employees:', averageAge);
//********************************************************************* 
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
  let res = employees.filter(employees => employees.salary > salaryFrom && employees.salary < salaryTo)
    .sort((a, b) => a - b)
  return res;
}
let employeesValueSalary = getEmployeesBySalary(employees, 13000, 16000);
console.log('employees with salaries in the range:', employeesValueSalary);
//********************************************************************** 
function salaryIncrease(employees, borderSalary, percent) {
  return employees.map(employee => {
    if (employee.salary < borderSalary) {
      employee.salary = employee.salary + employee.salary * percent / 100;
    }
    return employee
  })
}
let employeesAfterIncSalary = salaryIncrease(employees, 13000, 10);
console.log('employees with salary after promotion:', employeesAfterIncSalary);






