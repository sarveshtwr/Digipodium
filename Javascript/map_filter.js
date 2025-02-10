const nums = [3, 7, 5, 1, 9, 34, 38];

//WAP to print get an array of squares of all numbers
const sqrNum = nums.map((n) => {
  //   return n*n;
  return n ** 2;
});
console.log(sqrNum);

const price = ["23.432", "245.21", "4565", "999"];
const roundedprice = price.map((m) => {
  return parseInt(m);
});
//parseInt use to change value into integer
//parsefloat use to change value into float
console.log(roundedprice);

const evenNums = nums.filter((n) => {
  return n % 2 === 0;
});

console.log(evenNums);

const price2 = [12999, 4500, 2000, 9700, 3400, 1500];
const sortedPrice = price2.filter((s) => {
  return s >= 2000 && s <= 5000;
});
console.log(sortedPrice);

const brands = ["Samsung", "Apple", "Motorola", "Oppo", "Nokia", "Xiaomi"];
const searchedBrand = brands.filter((b) => {
  return b === "Apple";
});
console.log(searchedBrand);

const searchedchar = brands.filter((b) => {
  return b.includes("a");
});
console.log(searchedchar);

// .toLowerCase to change in lower case
const searchedlower = brands.filter((b) => {
  return b.toLowerCase().includes("a");
});
console.log(searchedlower);

// .toUpperCase to change in Upper case
const upperBrands = brands.map((b) => {
  return b.toUpperCase();
});

console.log(upperBrands);
