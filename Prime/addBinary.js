
// const addBinary = (a, b) =>{
  // let numa=parseInt(a, 2)
  // let numb=parseInt(b, 2)

  // let ans=numa+numb;

  // let as=ans.toString(2)

  // return as
// }



const addBinary = (a, b) => {
  let c=0;
  let ans="";

  let j=b.length-1;
  let i=a.length-1;

  while(i>=0 || j>=0 || c>0){
    let ansa=i>=0 ? parseInt(a[i]):0
    let ansb=j>=0 ? parseInt(b[j]):0

    let s=ansa+ansb+c;

    ans=(s%2)+ans;

    c=Math.floor(ans/2)
    
    i--;
    j--;
  }
  return ans
  // console.log(ans)
}



let num1=101;
let num2=1010;
// addBinary(num1, num2)
console.log(addBinary(num1, num2))