// Problem seven
function setPrime(n) {
  var acc = 0;
  for(var i = 2; true; ++i) {
    if(check(i)) acc++;
    if(acc === 10001) {
      return acc;
    }
  }
}

function check(n) {
  for(var i = 2; i < n; ++i) {
    if(!(n%i)) return false;
  }
  return true;
}


console.log(setPrime());
