/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let t = tokens
    let stk = [];

    for(let i=0; i<t.length; i++){
        if(t[i] !== '+' && t[i] !== '-' && t[i] !== '*' && t[i] !== '/'){
            stk.push(parseInt(t[i]));
            continue;
        }else{
            let s2 = parseInt(stk.pop());
            let s1 = parseInt(stk.pop());

            if(t[i] == '+'){
                stk.push((s1 + s2))
            }else if(t[i] == '-'){
                stk.push((s1 - s2))
            }else if(t[i] == '*'){
                stk.push((s1 * s2))
            }else {
                stk.push((s1 / s2))
            }
        }
    }
    return parseInt(stk[stk.length - 1])
};