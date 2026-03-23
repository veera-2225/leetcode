/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        let res = []
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === num) {
                res.push(i)
                res.push(j)
                return res
            }

        }
    }


};