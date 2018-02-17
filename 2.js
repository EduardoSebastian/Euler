// Problem two
function fib(callback) {
  var a = 1, b = 1, temp = 0, r = 0;
  while(a < 4000000) {
     temp = a;
     a = a + b;
     b = temp;
     r += a % 2 === 0 ? a : 0;
     if( a >= 4000000) callback(r);
  }
}

fib(result => {
  // result here
});
