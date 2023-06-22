function minimumInArray(N,arr){
    //write code here
    let min=Infinity;
    for(var i=0; i<N; i++){
        if(arr[i]<min){
            min=arr[i]
        }
        
    }
    console.log(min)
}

let arr=[1, 2, 3, 4, 5]
let n=5
minimumInArray(5,arr)

// Input:
// 5
// 1 2 3 4 5


// output:
// 1
