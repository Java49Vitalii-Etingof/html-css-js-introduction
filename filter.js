
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

