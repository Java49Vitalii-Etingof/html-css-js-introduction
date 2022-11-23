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
const str1 = 'Yellow';
const str2 = 'Yelolw';

function isAnagram(str1, str2) {
  console.log(str1);
  console.log(str2);

  if (str1.length != str2.length) {
    console.log('input parameters must be the same length');
    return false;
  }
  let Ar1 = Array.from(str1.toLowerCase());
  let Ar2 = Array.from(str2.toLowerCase());

  let obj1 = getOccurrences(Ar1);
  console.log(obj1);
  for (let i = 0; i < Ar2.length; i++) {
    if (obj1[Ar2[i]] == undefined) {
      console.log('letter "', Ar2[i], '" doesn’t exist');
      return false;
    }
    if (--obj1[Ar2[i]] < 0) {
      console.log('number of letters "', Ar2[i], '"in the word"', str2, 'does not match the number in the word"', str1);
      return false;
    }
  }
  return true;
}

function getOccurrences(strings) {
  const occurrences = {};
  strings.forEach(element => {
    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  });
  return occurrences;
}

res = isAnagram(str1, str2);
console.log('word "', str2, '"');