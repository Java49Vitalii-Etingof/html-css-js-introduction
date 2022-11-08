let strings = []
let ulSurrounding = []
function ulSurround(strings) {
    strings = strings.map(function (symbol, index) {
        return '<li>' + symbol + '</li>';
    })
    strings.splice(0, 0, '<ul>');
    strings.push('</ul>');
    return strings
}
console.log('Converted array =>', ulSurround(['hlk', 'shu', 'frt']));

//************************************************* */


function count(strings, symbol) {
    return strings.reduce(function (count, value) {
        return value === symbol ? count + 1 : count;
    }, 0);
}
console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'dz'));
console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'qt'));

//**************************************************/


function arrayCopy(src, srcPos, dst, dstPos, length) {

    src.slice(srcPos, srcPos + length)
        .reverse().forEach(value => {
            dst.splice(dstPos, 0, value);
        });
}

let src = [38, 245, 1, 3, 45, 2, 7, 9, 0];
let dst = [58, 14, 6, 8, 9, 0, 0, 2, 23, 5];

arrayCopy(src, 2, dst, 4, 2);
console.log('converted array', dst);
