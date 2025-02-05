function addNums(a, b) {
  var c = a + b;
  console.log(c);
}
addNums(34, 45);
addNums(3422, 245);
addNums(3423, 425);
addNums(3334);

// console.log(c);

const getAvg = function (a, b, c) {
  const avg = (a + b + c) / 3;
  //console.log(avg);
  return avg;
};
const result = getAvg(21, 32, 13);

console.log(result);

//
const factorial = (n) => {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
};

const fact = factorial(5);
console.log(fact);
