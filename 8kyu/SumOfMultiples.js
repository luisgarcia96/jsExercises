/*Find the sum of all multiples of n below m

n and m are natural numbers (positive integers)
m is excluded from the multiples

Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/

const multp = 4;
const limit = -7;

function sumMul(n,m){
  if (n >= m) {
    return "INVALID"
  } else {
    let sum = 0;
    for (let i = 0; i < m; i++) {
      (i % n === 0) ? sum+=i: sum+0; 
    }
    return sum;
  }
}

console.log(sumMul(multp, limit));

