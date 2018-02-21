/* Problem seven
The solution will be more efficient in the future (when i have more knowledge about this algorithm)
*/
function eratosthenes(n) {
  var arr = [2];
  for(var i = 3; true; i += 2) {
    if(arr.length === n) return i - 2;
    if(!resolve(arr, i)) {
      arr[arr.length] = i;
    }
  }
}

function resolve(array, n) {
  for(var i = 0, l = array.length - 1; i <= l; ++i) {
    var cur = array[i];
    if(!(n%cur)) return true;
  }
  return false;
}

eratosthenes(10001); // Result ( Tooks 340 ms )
