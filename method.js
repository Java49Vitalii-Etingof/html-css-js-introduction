// let strings = []
// let ulSurrounding = []
// function ulSurround(strings) {
//     strings = strings.map(function (symbol, index) {
//         return '<li>' + symbol + '</li>';
//     })
//     strings.splice(0, 0, '<ul>');
//     strings.push('</ul>');
//     return strings
// }
// console.log('Converted array =>', ulSurround(['hlk', 'shu', 'frt']));

// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`);
//     res.unshift('<ul>');    // res.slice(0, 0, '<ul>');
//     res.push('</ul>');
//     return res;
// }
// let ar = ['123','abc', 'lmn', 'lmn'];
// console.log(`input: ${ar} output: ${ulSurround(ar)}` )

// //************************************************* */


// // function count(strings, symbol) {
// //     return strings.reduce(function (count, value) {
// //         return value === symbol ? count + 1 : count;
// //     }, 0);
// // }
// // console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'dz'));
// // console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'qt'));

// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = 'lmn';
// console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)}`)


// //**************************************************/


// // function arrayCopy(src, srcPos, dst, dstPos, length) {

// //     src.slice(srcPos, srcPos + length)
// //         .reverse().forEach(value => {
// //             dst.splice(dstPos, 0, value);
// //         });
// // }

// // let src = [38, 245, 1, 3, 45, 2, 7, 9, 0];
// // let dst = [58, 14, 6, 8, 9, 0, 0, 2, 23, 5];

// // arrayCopy (src, 2, dst, 4, 2);
// // console.log('converted array', dst);

// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length);
//    dst.splice(dstPos, 0, ...arForCopy);
// //     arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//  }
//  let ar1 = [1, 2, 3, 4, 5, 6];
//  let ar2 = [10, 30, 40, 50];
//  arrayCopy(ar1,2,ar2,1,3);
//  console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`);


//  //************************************************************* */

//  function move(array, index, offset) {
//     let movedElem = array.splice( index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
//  }

function getEvenNumbers(numbers) {
    let res = numbers.filter(n => n % 2 == 0);
    return res;
}
let ar = [2, -10, 3, 1999];
ar.sort((a, b) => a - b );
console.log(ar);

