/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length
   let temp = nums.slice(nums.length - k, nums.length);
  let temp2 = nums.slice(0, nums.length - k);
  let result = [...temp, ...temp2];

  for(let i=0;i<nums.length;i++){
    nums[i] = result[i]
  }
};