function evenSumBelowN(num) {
    // Write code here
    let sum=0;
  let i=1;
    while(i<=num){
        if(i%2==0){
            sum+=i
        }
        i++;
    }
    console.log(sum)
}
evenSumBelowN(9)

