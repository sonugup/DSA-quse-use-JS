
//check target sumNumber

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

console.log(arrsum(arr, n, k))