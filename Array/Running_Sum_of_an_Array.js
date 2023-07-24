Running_Sum_of_an_Array

function Running_Sum_of_an_Array(t, n, arr){
    let bag="";
    let sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i];
        
        bag+=sum+" ";
        
    }
    console.log(bag)
}
