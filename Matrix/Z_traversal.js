
const Z_traversal = (mtr) => {
   let bag="";
   let n=mtr.length;
   for(var j=0; j<n; j++){
    bag+=mtr[0][j]+" ";
    // console.log(bag)
   }
   for(var j=n-2; j>=0; j--){
    bag+=mtr[ n-1-j][j]+" ";
    // console.log(bag)
   }
   for(var j=1; j<n; j++){
    bag+=mtr[n-1][j]+" ";
   }
console.log(bag)
}
let mtr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
 Z_traversal(mtr)