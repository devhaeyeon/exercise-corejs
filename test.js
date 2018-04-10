var x = [1, 2, 3];

x.map(function double(n) {
  return n*2;
}); // [2, 4, 6]

x.reduce(function sum(prevValue, curValue) {
  return prevValue + curValue;
}, 0); // 6

x.forEach(function logNumber(n) {
  console.log(n);
}); // logs each item to the console
