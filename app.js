 function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minYearOfBirth, maxYearOfBirth ){
 let employees = [];
let idDigits = 4;
  minId = Math.pow(10, idDigits-1);
  maxId = Math.pow(10, idDigits);
//employees.forEach(function(element) {
  let id = getRandomIntegerValue(minId, maxId);
  console.log(id);
//employees.push(id)
//});
function getRandomIntegerValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
}


// function getRandomId(min, max){
//   id = getRandomIntegerValue(min, max)
//   return id;
// }
// }