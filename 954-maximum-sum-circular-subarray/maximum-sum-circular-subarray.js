/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let sum = nums[0];
    let maxNormal = nums[0], maxCurr = nums[0], minNormal = nums[0], minCurr = nums[0];

    for (let i = 1; i < nums.length; i++){
        sum += nums[i];

        maxCurr = Math.max(maxCurr + nums[i], nums[i]);
        maxNormal = Math.max(maxCurr, maxNormal);

        minCurr = Math.min(minCurr + nums[i], nums[i]);
        minNormal = Math.min(minCurr, minNormal);
    }

    if(maxNormal < 0){
        return maxNormal
    }
    return Math.max(maxNormal, sum - minNormal)
};