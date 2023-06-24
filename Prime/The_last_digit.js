function theLastDigit(d, number) {
    // Write code here
    var n=number%10
    // console.log(n)
    if(n%3==0){
        console.log("Divisible")
    }else{
        console.log("Not Divisible")
    }
}

var N=126;
var d=3
theLastDigit(d,N)


// input:
// 3 126;

// output:
// Divisible
