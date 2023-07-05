function checkPalindrome(N, str) {
    //write code here
    var bag=true
  let l=0;
  let h=N-1;
  while(h>l){
      if(str[l]!=str[h]){
          bag=false;
          break;
      }
      l++;
      h--;
      
  }
  
  if(bag){
          console.log("Yes")
      }
      else{
          console.log("No")
      }
}

var str = "sonugupta";
var n=9;
checkPalindrome(n, str);

// Input: 
// 9
// sonugupta

// output:
// No
