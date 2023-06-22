function checkVowel(N, str) {
  //write code here
  let c=0
  for(var i=0; i<N; i++){
      if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
          c++
      }
  }
  if(c>0){
          console.log(true)
      }else{
          console.log(false)
      }
  
}

// Or

function checkVowel(N, str) {
  //write code here
  let c=0
  
  let vowels= ['a', 'e', 'i', 'o', 'u'];
  for(let char of str){
    if(vowels.includes(char)){
      c++
    }
  }
  if(c>0){
          console.log(true)
      }else{
          console.log(false)
      }
  
}




let n=4;
let str=stvr;

checkVowel(n, str)

// input: 
// 4 
// stvr

// output:
// false

