// Running_Sum_of_an_Array

function Running_Sum_of_an_Array( n, arr){
    let bag="";
    let sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i];
        
        bag+=sum+" ";
        
    }
    console.log(bag)
}

let n=5;
let arr=[1, 2, 3, 4, 5];

Running_Sum_of_an_Array( n, arr)
