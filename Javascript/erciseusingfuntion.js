// // WAP to check if a number is Perfect Square
// const perfectsquare = function (n) {
//   for (let i = 1; i * i <= n; i++) {
//     if (i * i === n) {
//       f = 1;
//       break;
//     }
//   }
//   if (f === 1) {
//     console.log(n + " is a Perfect Square.");
//   } else {
//     console.log(n + " is not a Perfect Square.");
//   }
//   return n;
// };
// perfectsquare(9);

// // WAP to check if a number is Armstrong Number
// const armstrong = function (num) {
//   let sum = 0;
//   let temp = num;

//   while (temp > 0) {
//     let y = temp % 10;
//     sum += y * y * y;
//     temp = parseInt(temp / 10);
//   }

//   console.log("Given Number is " + num);
//   console.log("Sum of the Number is " + sum);

//   if (sum === num) {
//     console.log("Given Number is Armstrong");
//   } else {
//     console.log("Given Number is not Armstrong");
//   }
// };
// armstrong(153);

// //WAP to check if a number is palindrome
// const palindrome = function (n) {
//   let reverse = 0;
//   let temp = n;
//   while (temp > 0) {
//     let d = temp % 10;
//     reverse = reverse * 10 + d;
//     temp = parseInt(temp / 10);
//   }
//   if (n == reverse) {
//     console.log(n + " is palindrome");
//   } else {
//     console.log(n + " is not palindrome");
//   }
// };
// palindrome(141);

//WAP to check if a number is Prime
const primenumber = function (n) {
  let f = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      f += 1;
    }
  }
  if (f === 1) {
    console.log(n + " is prime number");
  } else {
    console.log(n + " is not prime number");
  }
};
primenumber(83);
