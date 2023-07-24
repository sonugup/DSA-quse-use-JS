Product Of Array


function Product_Of_Array(t, n, arr){
   
   const output = [];
  let product = 1;

  for (let i = 0; i < n; i++) {
    output[i] = product;
    product *= arr[i];
  }

  product = 1;
 for (let i = n - 1; i >= 0; i--) {
    output[i] *= product;
    product *= arr[i];
  }

  console.log(output.join(" "))
}
 let n=5;
let arr=[1, 2, 3, 4, 5];
output=120, 60, 40, 30, 24
Product_Of_Array(t, n, arr)
