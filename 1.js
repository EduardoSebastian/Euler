// Problem one
for(var i = 3, r = 0; i < 1e3; ++i) r += !(i%3) || !(i%5) ? i : 0;

console.log(r); // Result
