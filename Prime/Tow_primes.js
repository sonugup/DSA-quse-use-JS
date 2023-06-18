
function twoPrimes(a,b) {
    //write code here
   if (isPrime(a) && isPrime(b)) {
  console.log('True');
} else {
  console.log("False");
}

}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

twoPrimes(a,b)


/*
input: 11, 17;

Output:
true
*/
