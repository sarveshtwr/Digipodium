const num = [324, 45, 32, 244, 124, 2, 37];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// For of Loop
console.log("for of loop");
for (let n of num) {
  console.log(n);
}

console.log("For each Funtion");
num.forEach((n, a, c) => {
  console.log(n, a, c);
}); // First-Element Second-Index Third-Print all array element

console.log("Print all even element");
for (let n of num) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

//WAP to print only even value
console.log("even values");
num.forEach((n) => {
  if (n % 2 === 0) console.log(n);
});

//WAP to all element multiply by 2
console.log("multiply by 2");
const num2 = [];
num.forEach((n) => {
  num2.push(n * 2);
});

console.log(num2);

//WAP to print only odd value
console.log("odd values");
const odd = [];
num.forEach((a) => {
  if (a % 2 !== 0) {
    odd.push(a);
  }
});
console.log(odd);
