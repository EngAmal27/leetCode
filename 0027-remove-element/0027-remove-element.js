/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0; // عدد العناصر اللي مش بتساوي val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];     
      k++; 
    }
  }

  return k; 
};