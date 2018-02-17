// Problem two
var f = _ => {
  var a = b = 1, r = 0;
  while(a < 4e6) {
     a += b;
     b = a - b;
     r += !(a % 2) ? a : 0;
     if( a >= 4e6) return r;
  }
}
