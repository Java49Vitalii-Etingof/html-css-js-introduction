
function minMax(numbers) {
    return numbers.reduce ((ar, element) => { 
        if (element < ar[0]) { 
        ar[0] = element;
        }
        if (element > ar[1]) { 
            ar[1] = element;
            }
        return ar;   
    }, [numbers[0],  numbers[0]]);
    }
let numbers = [65, 14, 1, 3, 0, 5];
console.log(`input: ${numbers}  output: ${minMax(numbers)}`)
// *************************************************************

function deleteWithPrefix(strings, prefix) {
     array = strings.filter(element =>  !element.startsWith(prefix) );
     return array;
}
let strings  = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = ('old_');
console.log(`strings: ${strings} , prefix: ${prefix} , array: ${deleteWithPrefix(strings, prefix)}`)
// *****************************************************************************************************
// 3.	Write function getSortedEvenOdd(numbers)
// 3.1.	Takes array of numbers 
// 3.2.	Returns array sorted in the following order
// 3.2.1.	First numbers should be the even ones in the ascending order
// 3.2.2.	Last numbers should be the odd ones in the descending order
// 3.3.	The input array of numbers must not been updated
// 3.4.	Example: getSortedEvenOdd(numbers) returns new array with no update of “numbers”. let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1]

// function getSortedEvenOdd(strings) {
//    let even =  getEvenNumbers(numbers);
//    let odd = revers.getOddNubers(numbers);
//    array = even.push(odd);
//    return array;
// }
// function getEvenNumbers(numbers) {
//     even = numbers.filter(n => n % 2 == 0);
//     return even;
// }
// // function getOddNubers(numbers) {
// //     odd = numbers.filter(n => n % 2 != 0);
// //     return odd;
// // }
// let strings = [0, 5, 2, 3, 7, 4, 8];
// let array = getSortedEvenOdd(numbers);

function getSortedEvenOdd(numbers) {
    let even = numbers.filter(n => n % 2 == 0)
     let odd = numbers.filter(n => n % 2 != 0)
     
    array = even;
    return array
}
numbers = [0, 5, 2, 3, 7, 4, 8];
 array = getSortedEvenOdd(numbers);
console.log(array)