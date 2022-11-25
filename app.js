 function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minYearOfBirth, maxYearOfBirth ){
 

  minId = Math.pow(10, idDigits-1);
  maxId = Math.pow(10, idDigits);
  for(let i = 0; i < nEmployees; i++){
    let id = getRandomId(minId, maxId);

  }

 function getRandomIntegerValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
}

function createEmployee(id, name, yearOfBirth, salary ){
  return {id, name, yearOfBirth, salary};
}


// function getRandomId(min, max){
//   id = getRandomIntegerValue(min, max)
//   return id;
// }
 }

