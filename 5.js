// Problem five
function factorSolver(n, max) {
  for(var j = 2; j <= max; j++) {
    if(n%j !== 0) return false;
  }
  return true;
}

for(var i = 2520; true; i += 20) {
  if(factorSolver(i, 20)) {
    console.log(i); // Result
    break;
  } else if (i > 1e10) { break; }
}
