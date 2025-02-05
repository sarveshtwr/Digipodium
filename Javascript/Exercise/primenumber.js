//Prime Number

let n = 17;
let f = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    f += 1;
  }
}
if (f === 2) {
  console.log(" Given number is prime");
} else {
  console.log(" Given number is not prime");
}

// all Prime Number Range 40 to 130

/*for (let i = 40; i <= 130; i++) {
    let f = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            f += 1;
        } 
        
    }
    if (f === 2){
        console.log(i);            
    }
}*/
