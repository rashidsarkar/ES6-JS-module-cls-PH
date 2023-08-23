const glass = {
  name: "glass",
  colora: "golden",
  price: 12,
  isClend: true,
};
// console.log(Object.keys(glass));
// console.log(Object.entries(glass));
delete glass.isClend;
// console.log(glass);
const { isClend, ...newGlass } = glass;
console.log(newGlass);
Object.freeze(glass);
glass.surce = "bd";
console.log(glass);

const myObject = {
  name: "John",
  age: 30,
};

Object.seal(myObject);

myObject.name = "Jane"; // Existing property value can be changed
myObject.location = "New York"; // Can't add new properties
delete myObject.age; // Can't delete properties
