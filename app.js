 function createRandomEmployees(nEmployees, idDigits, minBirthYear, maxBirthYear , minSalary, maxSalary ){
 
  let employees = [];
  let uniqueIds = [];
  minId = Math.pow(10, idDigits-1);
  maxId = Math.pow(10, idDigits);
  for(let i = 0; i < nEmployees; i++){
    let id = getRandomId(minId, maxId, uniqueIds);
    let name = 'name'+ id;
    let birthYear = getRandomIntegerValue(minBirthYear, maxBirthYear);
    let salary = getRandomIntegerValue(minSalary, maxSalary);
    employees.push(createEmployee(id, name, birthYear, salary));
  }
    
   return employees;
 }

//  function getRandomID(min, max, arId){
//   let id = arId[0];
//   do {
//       id = getRandomIntegerValue(min, max);
//   } while (arId.includes(id))
//   arId.push(id);
//   return id;
// }
function getRandomId(min, max, uniqueIds) {
   id = uniqueIds[0];
  do {
      id = getRandomIntegerValue(min, max);
  }
  while(!uniqueIds.every(a => a != id))
  uniqueIds.push(id)   
  return id;
}
 function getRandomIntegerValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
}
function createEmployee(id, name, birthYear, salary) {
  return {id, name, birthYear, salary};
}
 employees = createRandomEmployees( 8, 1, 1955, 2002, 10000, 20000, );
console.log(employees);

function getAverageAge(employees){
  let currentYear = (new Date()).getFullYear();
  let averageAge = Math.round(employees.reduce((sum, employees) => {
   return sum + currentYear - employees.birthYear; 
  }, 0)/employees.length
  )
  return averageAge;
}
averageAge = getAverageAge(employees);
console.log(averageAge);

function getEmployeesBySalary(employees, salaryFrom, salaryTo){
   let employeeValueSalary = employees.filter(employees => employees.salary > salaryFrom && employees.salary < salaryTo)
   .sort((a, b) => a - b)
   return employeeValueSalary;
}  
employeeValueSalary = getEmployeesBySalary(employees, 12500, 17100);
console.log(employeeValueSalary);



 

