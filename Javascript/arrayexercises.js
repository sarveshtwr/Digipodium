const fruits = ["Apple", "Orange", "Banana", "Kiwi", "Mango"];

//access 2nd, 3rd and 4th Element

fruits.slice(1, 4); // Index (1,4)
console.log(fruits);

//add 2 fruits after apple
fruits.splice(1, 0, "Grapes", "Pineapple"); // (1,0)(index of starting element, number of selected element)
console.log(fruits);

// remove 2nd last element
fruits.slice(-2, 1);
console.log(fruits);

// removes orange and banana and insert pineapple
fruits.splice(-4, 2, "Avacado");
console.log(fruits);
