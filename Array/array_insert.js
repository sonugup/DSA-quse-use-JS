let data=[4, 5, 7, 6, 8, 2, 9, 3, 5, 12, 32, 45];
let newEle=70;
let position=3;
for(let i=data.length; i>=0; i--){
    console.log(data[i])
    if(i>=position){
        data[i+1]=data[i]
        if(i==position){
            data[i]=newEle;
        }
    }
    
}
console.log(data)