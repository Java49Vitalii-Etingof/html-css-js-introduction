console.log('function fromStringToNumber(string, base)');
function fromStringToNumber(string, base) {
 let result = 0; 
 for(let i=0; i<string.length; i++) {
    let code = string.charCodeAt(i);
    if(code >= 48 && code <= 57) {
        code -= 48;
    } else if(code >= 97 && code <= 122) {
        code -= 87;
    } else {
        return 'error';
    }
    let n = string.length -i - 1;
    result = result + code * (base**n);
 } 
 return result;
}
console.log(fromStringToNumber('java', 36));