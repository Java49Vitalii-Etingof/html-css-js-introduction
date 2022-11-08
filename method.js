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




