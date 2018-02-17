// Problem one
for(var i = 3, r = 0; i < 1000; ++i) r += i%3 === 0 || i%5 === 0 ? i : 0;
