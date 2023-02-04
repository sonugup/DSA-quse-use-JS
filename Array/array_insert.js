
function insertEle(){
    let data=[4, 5, 7, 6, 8, 2, 9, 3, 5, 12, 32, 45];
    
    let newEle=document.getElementById('newEle').value;

    let position=document.getElementById('position').value;
    for(let i=data.length; i>=0; i--){
        console.log(data[i])
        if(i>=position){
            data[i+1]=data[i]
            if(i==position){
                data[i]=newEle;
            }
        }
        
    }
    let newdata=document.getElementById("el").innerHTML=data;
    data.append(`New Array = ${newdata.join(" ")}`)
    console.log(data)
}
