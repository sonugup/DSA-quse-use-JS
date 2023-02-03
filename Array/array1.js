
let arr=[3,5,6,7,5]

let time1=performance.now()
console.log(arr[0])//3
console.log(arr[1])//5
console.log(arr[2])//6
console.log(arr[3])//7
console.log(arr[4])//5
let time2=performance.now()
console.log(time1-time2)//-4.913300007581711 - time

//bettar 

let time3=performance.now()
for(let i=0; i<arr.length; i++){
    
    console.log(arr[i])
    
}

let time4=performance.now()
    console.log(time3-time4)// -1.1525000035762787-time


