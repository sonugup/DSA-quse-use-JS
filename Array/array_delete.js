
function deleteEle(){
    let data=[5, 8, 2, 9, 23, 45, 11, 85];
    let position=document.getElementById("position").value;
    position=parseInt(position)
    for(let i=position; i<data.length; i++){
        console.warn(data[i])
        data[i]=data[i+1]
    }
    data.length=data.length-1;
    let newdata=document.getElementById("el").innerHTML=data;
    console.warn(newdata);
}
