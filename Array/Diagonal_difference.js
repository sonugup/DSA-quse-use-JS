
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
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

const arr=[1 2 3
           4 5 6
           9 8 9  ]
