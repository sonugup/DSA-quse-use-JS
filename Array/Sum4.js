
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.


// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


var fourSum = function(nums, target) {
    let ans=[];
    let arr=nums.sort((a, b) => a-b)

    for(let i=0; i< arr.length-3; i++){
        if(i>0 && arr[i]===arr[i-1]){
            continue
        }
        for(let j=i+1; j<arr.length-2; j++){
            if(j> i+1 && arr[j]===arr[j-1]){
                continue;
            }

            let l=j+1;
            let r=arr.length-1;
            while(l<r){
                let sum=arr[i]+arr[j]+arr[l]+ arr[r]
                if(sum===target){
                    ans.push([arr[i], arr[j], arr[l], arr[r]])

                    while(l<r && arr[l] === arr[l+1]){
                    l++
                }
                while(l<r && arr[r] === arr[r-1]){
                    r--
                }
                l++;
                r--
                }
                
                else if(sum<target){
                    l++;
                }
                else{
                    r--
                }
            }
        }
    }
    return ans

};
