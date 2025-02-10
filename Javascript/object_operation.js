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
