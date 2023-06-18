function patternPrinting(N) {
    // Write code here
   

  for (var i=1; i<=N; i++) {
      let pattern = '';
    for(var j=1; j<=i; j++){
        pattern+="*";
    }
    console.log(pattern)
  }
}

patternPrinting(5)

/*
Input : 5;

Output:
*
**
***
****
*****

*/

