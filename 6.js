// Problem six
function add() {
 var pow = 0, n = 100, sum = Math.pow(n * (n + 1)/2, 2);
 for(var i = 2; i <= 100; ++i) {
   pow += i * i;
 }
 return sum - (pow + 1);
}

console.log(add());
