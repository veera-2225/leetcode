/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp = [];

    let str = s.trim().split(/\s+/)

    for(let i=str.length-1; i>=0; i--){
        temp.push(str[i])
    }
    // temp.reverse()
    // temp.replace(',', ' ')
    let st = ''
    for(let i=0; i<temp.length; i++){
        if(i == 0){
            st += temp[i].trim()
        }else{
            st += ' ';
            st += temp[i].trim()
        }
    }
    // return temp.toString()
    return st
};