
function minMax(numbers) {
    return numbers.reduce((ar, element) => {
        if (element < ar[0]) {
            ar[0] = element;
        }
        if (element > ar[1]) {
            ar[1] = element;
        }
        return ar;
    }, [numbers[0], numbers[0]]);
}
let numbers = [65, 14, 1, 3, 0, 5];
console.log(`input: ${numbers}  output: ${minMax(numbers)}`)
// *************************************************************

function deleteWithPrefix(strings, prefix) {
    array = strings.filter(element => !element.startsWith(prefix));
    return array;
}
let strings = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = ('old_');
console.log(`strings: ${strings} , prefix: ${prefix} , array: ${deleteWithPrefix(strings, prefix)}`)
// *****************************************************************************************************


function getSortedEvenOdd(numbers) {
    numbers.sort((a, b) => a - b);
    let even = numbers.filter(n => n % 2 == 0)
    let odd = numbers.filter(n => n % 2 != 0)
    odd = odd.reverse();
    array = even.concat(odd);
    return array
}
numbers = [0, 5, 2, 3, 7, 4, 8];
array = getSortedEvenOdd(numbers);
console.log(`input: ${numbers}  output: ${getSortedEvenOdd(numbers)}`)
