// let ar = [];
// ar[10000] = 100;
// ar[1] = [1, 2, 3];
// console.log("length of array = ", ar.length);
// ar[0] = "hello";
// console.log("10000-th element = ", ar[10000]);
// console.log("0-th element =", ar[0]);
// console.log("1-th element =", ar[1]);
// let str = "Hello";
// let arStr = Array.from(str);
// console.log("String 'Hello' -> array if", arStr);
// // for(let i = 0; i<arStr.length; i++) {
// //     console.log("element at index", i, arStr[i]);
// // }
// function println(element, index, array) {
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index) {
//     return index % 2 == 0 ? symbol.charCodeAt()  : symbol;
// })
// console.log(arStr, arCodeAscii);
// let sumAscii = arStr.reduce(function(res, cur) {
//     return res + cur.charCodeAt();
// }, 0)
// console.log("sum of ascii ", sumAscii);
// console.log(arStr.reduce(function(res, cur) {
// return res + cur;
// }, ""))
const char0 = '0'.charCodeAt();
function checkTeudatZehut(NumberStr) {
    if(NumberStr.length != 9) {
        console.log('NumberTeudatZehut', false);
return false;
    }
       
       let array = Array.from(NumberStr).map(function(symbol, index) {
        let value = symbol.charCodeAt() - char0;
        if(index % 2 == 0) {
            return value;
        }
            else if(value * 2 < 10) {
                return value * 2;
            }
            else return (value*2)%10 + Math.trunc((value*2)/10)
            })
            console.log(array);
            let ctrlSum = 0;
       ctrlSum =  array.reduce(function(sum, cur) {
        return sum + cur;
        
       }, 0)
       console.log(ctrlSum);
       if(ctrlSum % 10 == 0)
       console.log('NumberTeudatZehut ', true);
       else console.log('NumberTeudatZehut', false);
      

       }    
      
    


checkTeudatZehut('341163020');

//  let i = 0;
//   do {
//    array[8] = i
//    NumberStr = array.toString();
//    checkTeudatZehut(NumberStr);
//     i += 1; 
//  } while(ctrlSum % 10 == 0);

//  console.log(array);

//  console.log(array); 

// let teudatStrNumber = '341163004';
// let arStr = Array.from(teudatStrNumber);
// console.log(arStr);

//  let ar1Str = arStr.map(function(symbol, index) {
//     return index % 2 == 0 ? symbol : symbol * 2;
//  })
//  let res = 0
//  console.log(ar1Str);
//  let ar2Str = ar1Str.reduce(function(res, cur) {
//     return res + cur.symbol();
//      }, 0)
//      console.log(sumSymbol);
// }

    //TODO
    //control sum of for even index digit value, for odd index digit * 2
    //control sum should be divide on 10 with no remainder
    //example 123456782 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 2 => true
    //    123456783 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 3 => false
 
// function generateRandomTeudatZehut() {
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
// }
