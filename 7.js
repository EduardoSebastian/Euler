/* Problem seven
The solution will be more efficient in the future (when i have more knowledge about this algorithm)
*/
var start = performance.now();

function eratosthenes(n) {
  var arr = [2], acc = 0;
  for(var i = 3; true; i += 2) {
    if(arr.length === n) return i;
    if(!resolve(arr, i)) {
      arr.push(i);
    }
  }
}

function resolve(array, n) {
  return array.filter(cur =>  {
    return !(n%cur);
  }).length > 0;
}

eratosthenes(10001); // Result ( Tooks 2800 ms )
