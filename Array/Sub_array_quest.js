
// Sub array quest II

// Given an array A with N positive integers.
//   Count the number of subarrays that start 
//   and end with an even number.

function subArrQueII(N, A) {
  //write code here
  var count=0
  for(var i=0; i<N; i++){
      
      for(var j=i; j<N; j++){
          let b=[]
          for(var k=i; k<=j; k++){
              b.push(A[k])
             
          } 
          if(b[0]%2!=1 && b[b.length-1]%2!=1)count++
        //   console.log(b)
      }
      
  }
  console.log(count)
}

let arr = [1, 2, 3, 4 ,5];
let n=5
subArrQueII(n, arr)
