let arr=[9, 9, 4, 5,6 ,7,8,8,5,4,]
 let x=5
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
       console.log(arr[x])
}

function getElement(){
    let el=document.getElementById("element").value;
    if(el<arr.length){
        alert(arr[el])
    }
    else{
        alert("invalat data")
    }
    
    alert("function call")
}
console.log(arr[x])