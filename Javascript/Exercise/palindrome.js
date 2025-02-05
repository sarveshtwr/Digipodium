//WAP a program to check the number is palindrome or not

let n = 12345;
let reverse = 0;
let temp = n;
while (temp > 0) {
  let d = temp % 10;
  reverse = reverse * 10 + d;
  temp = parseInt(temp / 10);
}
if (n == reverse) {
  console.log(n + " is palindrome");
} else {
  console.log(n + " is not palindrome");
}
