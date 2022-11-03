let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array = ", ar.length);
ar[0] = "hello";
console.log("10000-th element = ", ar[10000]);
console.log("0-th element =", ar[0]);
console.log("1-th element =", ar[1]);
let str = "Hello";
let arStr = Array.from(str);
console.log("String 'Hello' -> array if", arStr);
// for(let i = 0; i<arStr.length; i++) {
//     console.log("element at index", i, arStr[i]);
// }
function println(element, index, array) {
    console.log("element at index ", index, element);
}
arStr.forEach(println);
let arCodeAscii = arStr.map(function(symbol, index) {
    return index % 2 == 0 ? symbol.charCodeAt()  : symbol;
})
console.log(arStr, arCodeAscii);
let sumAscii = arStr.reduce(function(res, cur) {
    return res + cur.charCodeAt();
}, 0)
console.log("sum of ascii ", sumAscii);
console.log(arStr.reduce(function(res, cur) {
return res + cur;
}, ""))