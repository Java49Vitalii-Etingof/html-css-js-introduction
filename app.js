console.log("SUM OF DIGITS");
function sumDigits(number) {
    if (isNaN(number)) {
        return 'NAN'
    }
    if (number < 0) {
        number = -number;
    }
    let sum = 0;
    do {
        sum += number % 10;
        number = Math.trunc(number / 10);
    }
    while (number > 0);
    return sum;
}
console.log('SUM =', sumDigits(368945));
console.log('SUM =', sumDigits(-368456));
console.log('SUM =', sumDigits(0));
console.log('SUM =', sumDigits('Word'));