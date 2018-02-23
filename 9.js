// Problem nine
function triplePythagorean() {
  for(var i = 10; i <= 1000; ++i) {
    var cache = compare(i, 1000);
    if(cache) {
      return cache;
    }
  }
}

function compare(temp, max) {
  for(var i = 10; i <= 1000; ++i) {
    var valid = temp*temp + i*i, sq = Math.sqrt(valid), sum = temp + i + sq;
    if(!(sq%1) && sum === 1000) {
      return temp * i * sq;
    }
  }
  return 0;
}


console.log(triplePythagorean()); // Result
