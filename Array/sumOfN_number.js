let n=8;

function sumOfnNumer(n){
    let total=0;
    for(let i=0; i<=n; i++){
        total+=i
    }
    return total;
}
let time1=performance.now()

console.log(sumOfnNumer(n))

let time2=performance.now()
