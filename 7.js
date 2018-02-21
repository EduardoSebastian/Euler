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
  return array.some(cur => !(n%cur));
}

eratosthenes(10001); // Result ( Tooks 1300 ms )
