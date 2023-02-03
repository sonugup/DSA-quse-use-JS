
//check target sumNumber

const { boolean } = require("yargs");

let arr=[3,4,6,7,8,3,4,5,3,6]
let n=arr.length;
let k=7;
function arrsum(a, n){
    for(var i=0; i<n-1; i++){
        for(var j=i+1; j<n; j++){
            if(arr[i]+arr[j] === k){
                // return [i, j]
                return true;
            }
        }
    }
    // return -1;
    return false;
}
let time1=performance.now()
console.log(arrsum(arr, n, k))
let time2=performance.now()

console.log(`run time ${time1-time2}`)//run time -3.9916000068187714


// better 


// The Set.has() method in javaScript is used to check whether an element 
// whith a specified value exist in a Set or not . it return boolean
// value .it return true if the element exsit on the set else it
// return false if the element doesn't exist.
function hasPairWithSum(arr, n, k){
    const mnset=new Set();
    for(let i=0; i<n; i++){
        if(mnset.has(arr[i])){
            return true;
        }
        mnset.add(k-arr[i]);
    }
    return false;
}
let time3=performance.now()
console.log(hasPairWithSum(arr, n, k))
let time4=performance.now()
console.log(`run time ${time3-time4}`)//run time -0.8420999944210052