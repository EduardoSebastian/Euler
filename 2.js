// Problem two
function fib() {
  var a = b = 1, r = 0;
  while(a < 4000000) {
     a += b;
     b = a - b;
     r += a % 2 === 0 ? a : 0;
     if( a >= 4000000) return r;
  }
}
