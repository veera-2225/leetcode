/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(nums[mid] === target){
            return mid;
        }else if(nums[0] <= nums[mid]){
            if(target <= nums[mid - 1] && target >= nums[0]){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }else if(nums[nums.length - 1] >= target && nums[mid + 1] <= target){
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return -1
};