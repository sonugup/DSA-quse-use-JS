
const spriral_traversal=(mtr) => {
    var bag="";
    let top=0;
    let left=0;
    let n=mtr.length;
    let but=n-1;
    let right=n-1
    for(var i=top; i<=but; i++){
        bag+=mtr[i][left]+" ";
        // left++;
        console.log(bag)
    }
    left++;

    for(var i=left; i<=right; i++){
        bag+=mtr[but][i]+" ";
    }
    but--;

    for(var i=but; i>=top; i--){
        bag+=mtr[i][right]+" ";
    }
    right--;

    for(var i=right; i>=left; i--){
        bag+=mtr[top][i]+" ";
    }
    top++;

    console.log(bag)
}



let mtr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

 spriral_traversal(mtr)