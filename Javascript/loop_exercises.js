//WAP TO PRINT ALL NUMBERS FROM 50 TO 320 WHICH ARE DIVISIBLE 7 AND 11
for (let i = 50; i <= 320; i++) {
  if (i % 7 === 0 && i % 11 === 0) {
    console.log(i);
  }
}

//WAP to Reverse a number
let num = 12345;
let rev = 0;

while (num > 0) {
  let d = num % 10;
  rev = rev * 10 + d;
  num = parseInt(num / 10);
}
console.log(rev);
