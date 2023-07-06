
function evenProductInColumns(N,M, arr){
    //write code here
    for(var i=0; i<M; i++){
        let mul=1
        for(var j=0; j<N; j++){
            if(arr[j][i]%2==0){
                mul=mul*arr[j][i]
            }
        }
        console.log(mul)
    }
  
}

// output:
let n=3;
let m=2;
let arr=[[1,2,3],[4, 5, 6],[7, 8, 9]]

evenProductInColumns(n, m, arr)

// input:
// 4
// 16
// 6
