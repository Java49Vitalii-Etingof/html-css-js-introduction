let strings = []
let ulSurrounding = []
function ulSurround(strings) {
    strings = strings.map(function(symbol, index) {
        return '<li>' + symbol + '</li>';   
    })
    strings.splice(0, 0, '<ul>');
    strings.push('</ul>');
    return strings
}
console.log('Converted array =>', ulSurround(['hlk','shu','frt']));

//************************************************* */


function count(strings, symbol) {
    return strings.reduce(function(count, value) {
        return value === symbol ? count+1 : count;
    }, 0);   
}
console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'dz'));
console.log('element match ', count(['dz', 'qt', 'ke', 'dz', 'qt'], 'qt'));

//**************************************************/



