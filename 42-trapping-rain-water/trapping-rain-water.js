/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let res = 0;
    let left = [];
    let right = [];
    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i=1; i<n; i++){
        left[i] = Math.max(height[i], left[i-1])
    }
    for(let j=n-2; j>=0; j--){
        right[j] = Math.max(height[j], right[j+1])
    }
    for(let i=0; i<n; i++){
        res += Math.min(left[i], right[i]) - height[i]
    }
    return res
};