
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 12
// Output: 4
// Explanation: 12 exists in nums and its index is 5
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 6
// Output: -1
// Explanation: 6 does not exist in nums so return -1

var search = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        let mid= i+ Math.floor((j-i)/2)
        if(nums[mid] == target){
            return mid;
        
        }
        else if(nums[mid]>target){
            j=mid-1;
        }else{
            i=mid+1;
        }
        
    }
    return -1
};


let  nums = [-1,0,3,5,9,12], target = 12;

search(nums,target)
