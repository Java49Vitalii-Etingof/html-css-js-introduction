 function createRandomEmployees(nEmployees, idDigits, minBirthYear, maxBirthYear , minSalary, maxSalary ){
 
  let employees = [];
  minId = Math.pow(10, idDigits-1);
  maxId = Math.pow(10, idDigits);
  for(let i = 0; i < nEmployees; i++){
    let id = getRandomIntegerValue(minId, maxId);
    let name = 'name'+ id;
    let birthYear = getRandomIntegerValue(minBirthYear, maxBirthYear);
    let salary = getRandomIntegerValue(minSalary, maxSalary);
    employees.push(createEmployee(id, name, birthYear, salary));
  }
   return employees;
 }
 function getRandomIntegerValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
}
function createEmployee(id, name, birthYear, salary) {
  return {id, name, birthYear, salary};
}
let res = createRandomEmployees( 8, 3, 10000, 20000, 1955, 2002);
console.log(res);

// function getRandomId(min, max){
//   id = getRandomIntegerValue(min, max)
//   return id;
// }
 

