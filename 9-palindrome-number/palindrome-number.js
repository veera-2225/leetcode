/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // return (Number(x.toString().split('').reverse().join("")) === x)

    let res = 0;
    let temp = x

    while(temp > 0){
        let n = temp%10
        res = res * 10 + n
        temp = Math.floor(temp/10)
    }
    return res === x
};