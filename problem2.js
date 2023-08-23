const frindsWithJor = (arr) => {
  let newArr = [];
  for (name of arr) {
    if (name.length % 2 == 0) {
      newArr.push(name);
    }
  }
  return newArr;
};
const friends = [
  "sabbir",
  "karim,",
  "rahim",
  "nabila",
  "toma",
  "salma",
  "himu",
];
const fitterFriendsByEvenLength = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "bill",
];
// console.log(frindsWithJor(...friends));
console.log(frindsWithJor(fitterFriendsByEvenLength));
