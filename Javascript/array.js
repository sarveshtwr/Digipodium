const arr = [34, "Sarvesh", true, null];
console.log(arr);
console.log(Array.isArray(arr)); //Check array or not.

const movies = [
  "Spider-Man",
  "Iron-Man",
  "Baazigar",
  "Kanchana",
  "Badass Ravi Kumar",
  "1920",
];

console.log(movies.length); //to check length of an array and also work for strings

// Indexing
console.log(movies[1]); //also work for strings
console.log(movies.indexOf("Baazigar")); //also work for strings
console.log(movies.at(-2)); // for reverse index counting we use .at and also work for strings

movies[1] = "Intersteller";
console.log(movies);

// Slicing
console.log(movies.slice(2, 5));
console.log(movies.slice(2, 50));
console.log(movies.slice(2));
console.log(movies.slice());

// Addiing and Removing Elements
movies.push("Lucifer"); // add new element at the end
movies.unshift("Star-Wars"); // add new element at the begining
console.log(movies);

movies.pop(); // Removes last element
movies.shift(); // Removes first element
console.log(movies);

//movies.splice(2, 2); //(Starting Element, Numbers of Element to Remove) REMOVING ELEMENT
movies.splice(2, 2, "Deadpool", "Superman"); // Removing and adding element at same time.
console.log(movies);
movies.splice(-2, 2); // Removing and adding using reverse indexing element at same time.
console.log(movies);

movies.splice(2, 0, "Bandish Bandits", "Kill", "Marco", "Aquaman");
console.log(movies);
