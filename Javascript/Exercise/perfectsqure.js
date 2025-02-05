// Perfect Square   Number.IsInteger

let n = 16;
let f = 0;

for (let i = 1; i * i <= n; i++) {
  if (i * i === n) {
    f = 1;
    break;
  }
}
if (f === 1) {
  console.log(n + " is a Perfect Square.");
} else {
  console.log(n + " is not a Perfect Square.");
}
