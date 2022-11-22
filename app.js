// function getAddressKey() {
   
//     return "address";
// }
// const person = {id: 123, first_name: 'Vasya',
//  last_name: 'Ivanov', year: 2000, address: {city: 'Lod',
//   street: 'Sokolov', app: 100}
// };

// const name1 = getAddressKey();

// console.log(person[name1])
//******************************* 
// const personArr = [123, 'Vasya', 'Ivanov', 2000,
//  ['Lod', 'Sokolov', 100]]
//  console.log(personArr[3])
//   console.log(person.address);
//******************************************* */
// function displayOccurrences(strings) {
//    const occurrences = {};
//    strings.forEach(element => {
//        if (occurrences[element]) {
//            occurrences[element]++;
//        } else {
//            occurrences[element] = 1;
//        }
//    });
//    console.log(Object.entries(occurrences));
//    const occurrencesAr = Object.entries(occurrences)
//    occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
//    console.log(occurrencesAr);

// }
//*************************************************** */
//  const x = {};
//  const string = "abc";
//  x[string] = 1;
//  console.log(x);
//  x[string]++;
//  console.log(x);
// const strings = ["a","opr","lmn", "abc", "lmn","abc", "lmn", "lmn", "abc", "a"];
// displayOccurrences(strings);
//************************isAnagram******************************************** */
const str1 = 'yellow';
const str2 = 'yello';
//****************************************** 

function isAnagram() {
const strings1 = Array.from(str1);
const strings2 = Array.from(str2);
// console.log(strings1);
// console.log(strings2);
if(strings1.length != strings2.length){
 res = 'input parameters must be the same length';
 }
//  

 
   const Ar1  = displayOccurrences(strings1);  
   console.log(Ar1);
   console.log(Ar1[0]);
   let i = 0;
   let ar = Ar1[i];
   strings2.forEach(element,i) => {
while (ar[0] != element;
    
   }
   
   
//    elementСomparison();
  
    return res;
}
//***************************************** */
// function elementСomparison(){
//    Ar1['i',''].forEach
// }
function displayOccurrences(strings) {
   const occurrences = {};
   strings.forEach(element => {
       if (occurrences[element]) {
           occurrences[element]++;
       } else {
           occurrences[element] = 1;
       }
   });
   return Object.entries(occurrences);
}
   
res =  isAnagram(str1, str2) ;
//  console.log(res);

//************************************************* */
// let guessedLetters = 0;
//         strings1.forEach((element, i) => {
//             if (wordTyped[i] == element.innerHTML.toLowerCase()) {
//                 element.style.background = "white";
//                 guessedLetters++;
//             }



// Array.prototype.diff = function(a) {
//    return this.filter(function(i){return a.indexOf(i) < 0;});
// };

// const mas1 = ["some1","some2","some7", "some5", "some4"];
//  const  mas2 = ["some1","some2","some5", "some4"];

// const mas3 = mas2.diff(mas1);
// console.log(mas3); // ["some5"]
// const one = ['one', 'two', 'three', 'four']
// const two = ['two', 'three', 'four', 'five', 'six']
// const a = one.filter( el => two.indexOf( el ) > -1 ).length;
// console.log(a);