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


// input: 
// 4 
// stvr

// output:
// false
