// Armstrong Number

let num = 154;
let sum = 0;
let temp = num;

while (temp > 0) {
  y = temp % 10;
  sum += y * y * y;
  temp = parseInt(temp / 10);
}

console.log(num, sum);
if (sum === num) {
  console.log("Givem Number is Armstrong");
} else {
  console.log("Givem Number is not Armstrong");
}
