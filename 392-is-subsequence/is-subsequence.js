/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function sequence(s, t, m, n) {
    if (m === 0) return true;
    if (n === 0) return false;

    if (s[m-1] === t[n-1]) {
        return sequence(s, t, m - 1, n - 1)
    } else {
        return sequence(s, t, m, n - 1)
    }
}


var isSubsequence = function (s, t) {
    let m = s.length 
    let n = t.length 

    if (!(m >= 0)) {
        return false
    } else {
        return sequence(s, t, m, n)
    }
};