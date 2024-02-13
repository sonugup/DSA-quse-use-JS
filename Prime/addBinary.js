
const addBinary = (a, b) =>{
  let numa=parseInt(a, 2)
  let numb=parseInt(b, 2)

  let ans=numa+numb;

  let as=ans.toString(2)

  return as
}

let num1=101;
let num2=1010;

console.log(addBinary(num1, num2))