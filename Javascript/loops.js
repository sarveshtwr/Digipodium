for (let i = 0; i < 10; i++) {
  console.log(i);
}

//WAP to print all even numbers from 1 to 50;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//while loop
console.log("While Loop");

let num = 10;

while (num < 20) {
  console.log(num);
  num++;
}

// Do-While Loop
console.log("Do-While Loop");

let a = 10;
do {
  console.log(a);
  a++;
} while (a < 10);

//node --watch loop.js
