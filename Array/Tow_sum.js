// Tow Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));
