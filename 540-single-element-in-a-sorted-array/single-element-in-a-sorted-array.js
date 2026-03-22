/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] == nums[i+1]) {
                continue
            }else {
                return nums[i]
            }
    }
    return -1
};