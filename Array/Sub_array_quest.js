
Sub array quest II


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

let arr = [1, 2, 3, 4];
