
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


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
