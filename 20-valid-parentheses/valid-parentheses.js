/**
 * @param {string} s
 * @return {boolean}


 */

function validParats(str, a) {
    if (a === ')') {
        return str[str.length - 1] === '(';
    } else if (a === ']') {
        return str[str.length - 1] === '[';
    } else if (a === '}') {
        return str[str.length - 1] === '{';
    } else {
        return false
    }
}
var isValid = function (s) {
    let v = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            v.push(s[i]);
        } else if (v.length === 0) {
            return false;
        } else if (validParats(v, s[i])) {
            v.pop();
        } else {
            return false;
        }
    }
    return v.length === 0;
};