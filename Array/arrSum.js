
let arr=[3,4,6,7,8,3,4,5,3,6]
let n=arr.length;


function sumarr(arr, n){
    let sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i]
    }
    // console.log(sum)
    return sum
}
console.log(sumarr(arr, n));