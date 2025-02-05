//WAP a program to Reverse a number

let n = 12345;
let reverse = 0;
while (n > 0) {
  let d = n % 10;
  reverse = reverse * 10 + d;
  n = parseInt(n / 10);
  console.log(reverse, n);
}
console.log(reverse);
