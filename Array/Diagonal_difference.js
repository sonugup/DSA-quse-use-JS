

function diagonalDifference(arr) {
    // Write your code here
    let sum=0;
    let sum2=0;
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length; j++){
    if(i==j){
      sum+= arr[i][i];
    }
    if((i+j)==(arr.length-1))
    
    sum2+=arr[i][j]
  }
}
let sum1=Math.abs(sum2-sum)
return sum1
}
