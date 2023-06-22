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
