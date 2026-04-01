/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let st = new Set(nums2);
    let res1 = new Set()
   

    for(let i=0; i<nums1.length; i++){
        if(st.has(nums1[i])){
            res1.add(nums1[i])
        }
    }
    return [...res1]
};