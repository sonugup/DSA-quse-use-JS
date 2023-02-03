let n=8;

function sumOfnNumer1(n){
    let total=0;
    for(let i=0; i<=n; i++){
        total+=i
    }
    return total;
}
let time1=performance.now()

console.log(sumOfnNumer1(n))

let time2=performance.now()

console.log(`run time ${time1-time2}`)//run time -5.44990000128746

//better  
// function sumOfnNumer2(n){
//     return n* (n+1)/2
// }

function sumOfnNumer2(n){return n* (n+1)/2}
let time3=performance.now()

console.log(sumOfnNumer1(n))

let time4=performance.now()

console.log(`run time ${time3-time4}`)//run time -0.2158999890089035
