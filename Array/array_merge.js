
let data1=[4, 5, 7, 6, 8, 2, 9, 3, 5, 12, 32, 45];
let data2=[20, 40, 60, 5, 10, 70, 80, 99];


let data=[];
for(let i=0; i<data1.length; i++){
    data[i]=data1[i]
}

for(let i=0; i< data2.length; i++){
    data[data1.length+i]=data2[i]
}

console.log(data)

data.push(...data1, ...data2)
console.log(data)