const user = {
  name: "Ramu",
  email: "Ramu@mail.com",
  password: "ramu123",
};
console.log(user.name);
console.log(user["email"]);

user.address = "Lucknow";
user.password = "xyz@123";

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
