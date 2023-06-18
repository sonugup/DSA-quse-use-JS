function identifyPrime(num) {
    // Write code here
    let c=0
    for(var i=2; i<num; i++){
        if(num%i==0){
            c++
        }
    }
    if(c<1){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
identifyPrime(17)
