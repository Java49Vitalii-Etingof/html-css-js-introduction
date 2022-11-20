// const person = {id: 123, first_name: 'Vasya',
//  last_name: 'Ivanov', year: 2000, addres: {city: 'Lod',
// street: 'Sokolov', app: 100}
// };
// const yearExp = "ye" +"ar";
// console.log(person[yearExp]);
function displayOccurrences(strings) {
    const occurrences = {};
    strings.array.forEach (element => {
       if (occurrences[element]) {
        occurrences[element] ++;
       } else {
        occurrences[element] = 1;
       }
    });
        
   console.log(occurrences); 
}
const strings = ['lmn', 'abc', 'lmn', 'lmn', 'abc', 'a']
displayOccurrences(strings);