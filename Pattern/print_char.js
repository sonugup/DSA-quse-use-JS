
const printChar = (n) => {
    let i = 1;
    while (i <= n) {
        var ans = ""
        let j = 1;
        while (j <= i) {
            ans += n - i + j;
            j++;
        }
        i++;
        console.log(ans)
    }
}

let n = 3;

printChar(n)