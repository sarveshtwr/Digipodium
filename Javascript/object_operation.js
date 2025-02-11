const smartphone = {
  brand: "Samsung",
  model: "Galaxy M31",
  price: 14999,
  colors: ["blue", "white", "black"],
};

console.log(smartphone.brand);

//access price of the phone
console.log(smartphone.price);

//Change model of the phone to "Galaxy M32"
smartphone.model = "Galaxy M32";
console.log(smartphone);

//add new key ram and assign 6GB value
smartphone.RAM = "6 GB";
console.log(smartphone);

const smartphoneList = [
  {
    brand: "Samsung",
    model: "Galaxy M31",
    price: 14999,
    colors: ["blue", "white", "black"],
  },
  {
    brand: "Oppo",
    model: "F17",
    price: 34000,
    colors: ["blue", "white", "black"],
  },
  {
    brand: "Apple",
    model: "iPhone 12",
    price: 79990,
    colors: ["blue", "white", "black"],
  },
  {
    brand: "Oneplus",
    model: "8T",
    price: 42999,
    colors: ["blue", "white", "black"],
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 7 Pro",
    price: 16999,
    colors: ["blue", "white", "black"],
  },
];

console.log(smartphoneList.length);

console.log(smartphoneList[0]);
console.log(smartphoneList[0].price);
console.log(smartphoneList[0].brand);
console.log(smartphoneList[2].price);
console.log(smartphoneList.at(-1).colors[1]); // .at fuction used to access element from reverse indexing
console.log(smartphoneList.at(-1).colors.unshift("red")); // .unshift to add element in the begining
console.log(smartphoneList.at(-1));
console.log(smartphoneList);

const brand = smartphoneList.map((phone) => {
  return phone.brand;
});
console.log(brand);

const budgetPhones = smartphoneList.filter((a) => {
  return a.price <= 40000;
});
console.log(budgetPhones);

//WAp to get prices of all brands
const price = smartphoneList.map((a) => {
  return a.price;
});
console.log(price);

//WAP to get all phones with black color
const phoneColor = smartphoneList.filter((a) => {
  return a.colors.includes("black");
});
console.log(phoneColor);

//WAP to get all phones with brand samsung
const Samsung = smartphoneList.filter((a) => {
  return a.brand.includes("Samsung");
});
console.log(Samsung);

const search = "Samsung";
const searchResult = smartphoneList.filter((phone) => {
  return phone.brand.toLowerCase().includes(search.toLowerCase());
});
console.log(searchResult);
