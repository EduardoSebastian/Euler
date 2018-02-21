// Problem three
function getLastFactor(n) {
 var tempArr = [2, 3], max = Math.sqrt(n);
 for(var i = 5; i < max; i += 2) {
  if(n%i) continue;
  if(check(tempArr, i)) continue;
  tempArr.push(i);
 }
 return tempArr[tempArr.length - 1];
}

function check(array, i) {
 for(var j = 0, l = array.length; j < l; ++j) {
  var cur = array[j];
  if(!(i%cur)) return true;
 }
  return false;
}

console.log(getLastFactor(600851475143)); // Result
