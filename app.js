 function createRandomEmployees(nEmployees, idDigits, minBirthYear, maxBirthYear , minSalary, maxSalary ){
 
  let employees = [];
  let arId = [0];
  minId = Math.pow(10, idDigits-1);
  maxId = Math.pow(10, idDigits);
  for(let i = 0; i < nEmployees; i++){
    let id = getRandomID(minId, maxId, arId);
    let name = 'name'+ id;
    let birthYear = getRandomIntegerValue(minBirthYear, maxBirthYear);
    let salary = getRandomIntegerValue(minSalary, maxSalary);
    employees.push(createEmployee(id, name, birthYear, salary));
  }
    
   return employees;
 }

 function getRandomID(min, max, arId){
  let id = arId[0];
  do {
      id = getRandomIntegerValue(min, max);
  } while (arId.includes(id))
  arId.push(id);
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
let res = createRandomEmployees( 8, 4, 1955, 2002, 10000, 20000, );
console.log(res);


 

