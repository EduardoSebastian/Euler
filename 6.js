// Problem six
function sumatory(n) {
  return n * (n + 1)/2;
}

function add() {
 var pow = 0, sum = Math.pow(sumatory(100), 2);
 for(var i = 0; i <= 100; ++i) {
   pow += i * i;
 }
 return sum - pow;
}

console.log(add());
