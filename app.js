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
checkTeudatZehut('34116302');

