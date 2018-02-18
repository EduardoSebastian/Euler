// Problem three
function setPrimes(n) {
  var arr = [2];
  for(var i = 3, l = arr.length; i < n; ++i) {
    if(checkMultiples(i, arr)) continue;
    arr.push(i);
  }
  function checkMultiples(n, array) {
    return array.filter(cur => {
      return !(n%cur);
    }).length > 0;
  }
  return arr;
}


function primeFactor(n) {
  var getPrimes = setPrimes(Math.sqrt(n)), l = getPrimes.length - 1;
  for(; l >= 0; --l) {
    var cur = getPrimes[l];
    if(!(n%cur)) return cur;
  }
  return false;
}

console.log(primeFactor(600851475143)); // Result
