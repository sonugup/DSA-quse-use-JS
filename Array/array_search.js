
function searchEle(){
    let data=[20, 40, 60, 5, 10, 70, 80, 99];

    let item=document.getElementById("position").value;
    let index=undefined;
    
    for(let i=0; i<=data.length-1; i++ ){
        if(data[i] === parseInt(item)){
            index=i;
            break;
        }
    }
    alert(` index number ${index} `);
}

