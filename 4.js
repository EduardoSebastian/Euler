// Problem four
function reverse(n) {
  var r =  "";
  while(n) {
    r += n%10;
    n = n/10 | 0;
  }
  return +r;
}

function palindromic(range) {
  var max = "", best = 0;
  while(range) {
    max += 9;
    range--;
  }
  var min = +max[0];
  max = +max;
  for(; max > min; --max) {
    for(var i = max; i > 1; --i) {
      let tempAdd = max * i;
      if(tempAdd === reverse(tempAdd)) {
        best = tempAdd > best ? tempAdd : best;
      }
    }
  }
  return best;
}

console.log(palindromic(3)); // Result
