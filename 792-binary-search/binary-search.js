/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    /* if(nums.length === 1 && nums[0] === target) return 0;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;

        } else if (nums[mid] < target) {
            start = mid + 1;
        }
    }
    return -1 */

    let low = 0;
    let high = nums.length - 1;

   function recursive(low, high){
        if(low > high){
            return -1
        }
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target){
            return mid
        }else if(nums[mid] > target){
            return recursive(low, mid - 1)
        }else if(nums[mid] < target){
            return recursive(mid + 1, high)
        } 
    }
   return recursive(low, high)
};