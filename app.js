const char0 = '0'.charCodeAt();
function checkTeudatZehut(NumberStr) {
    let ctrlSum = ControlSum(NumberStr);
    if (ctrlSum % 10 == 0 && NumberStr.length == 9)
        console.log('NumberTeudatZehut ', true);
    else console.log('NumberTeudatZehut', false);
}

function ControlSum(NumberStr) {

    let array = Array.from(NumberStr).map(function (symbol, index) {
        let value = symbol.charCodeAt() - char0;
        if (index % 2 == 0) {
            return value; 
        }
        else if (value * 2 < 10) {
            return value * 2;
        }
        else return (value * 2) % 10 + Math.trunc((value * 2) / 10)
    }) 

    let ctrlSum = 0;
    ctrlSum = array.reduce(function (sum, cur) {
        return sum + cur;

    }, 0)
    return ctrlSum;
}

checkTeudatZehut('341163020');
checkTeudatZehut('321325649');


const nineDigits = '012345678';
const minDigit = 0;
const maxDigit = 9;

let array =  getGeneratedArray(); 
     function getGeneratedArray() {
    return Array.from(nineDigits).map(function(symbol, index) {
        let value = (index==8) ? 0 : RandomIntegerValue(minDigit, maxDigit+1);
        return value;
    });
}
console.log(array);

function RandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let NumberStr = integerArray2String(array);
function integerArray2String(array) {
    return array.reduce(function(str, cur) {
        return str + String.fromCharCode(cur+char0);
    }, "");
}
console.log(NumberStr);
let ctrlSum = ControlSum(NumberStr);
console.log(ctrlSum);
let ninth = 0
if (ctrlSum % 10 == 0) {
   let res = 0;
}
    else res = (Math.floor(ctrlSum/10))*10 + 10 - ctrlSum;
    
console.log('ninth character = ', res);




