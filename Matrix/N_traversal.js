
const N_traversal = (m) => {
   // console.log(m)
   let ans = ""
   let n = m.length;
   for (var i = n - 1; i >= 0; i--) {
      ans += m[i][0] + " "
   }
   for (var i = 1; i < n; i++) {
      ans += m[i][i] + ' '
   }
   for (var i = n - 2; i >= 0; i--) {
      ans += m[i][n - 1] + ' '
   }

   console.log(ans)
}

let mtr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]
N_traversal(mtr)

