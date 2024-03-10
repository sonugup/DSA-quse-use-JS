
const print_sqr = (n) => {
    // let char = ["a", "b", "c", "d"]
    let i = 1;
    while (i <= n) {
        let ans = "";
        let j = 1;
        while (j <= n) {
            ans += i + j - 1 + " ";
            j++;
        }
        i++;
        console.log(ans)
    }
}
const n = 4;

print_sqr(n)