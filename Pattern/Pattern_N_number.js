function patternOfN(N) {
    // Write code here
    
    let i=1;
    let c=1;
    while(i<=N){
        let j=1;
        let b=""
        while(j<=N){
            b+=c+" "
            c=c+1;  
            j=j+1;
        }
        console.log(b)
            
        i=i+1
    }
}

patternOfN(4)
/*
Input: 4;

Output : 
1 2 3 4 
5 6 7 8 
9 10 11 12
13 14 15 16
*/