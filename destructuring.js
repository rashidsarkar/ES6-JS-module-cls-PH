const actor = {
  name: "Toma",
  age: 22,
  phone: "01231454",
  money: 8545,
};

// const actorPhone = actor.phone;
// console.log(actorPhone);
//  BEST OPTION FOR ES6
const { age, phone: telePhone } = actor;
console.log(age);
console.log(`mu ${telePhone}`);
console.log(telePhone);
// ARRAY Destructing
const num = [45, 99];
const [fast, secend] = num;
const [x, y] = [12, 66];
console.log(fast, secend);
//
function dubble(a, b) {
  return [a * 2, b * 2];
}
const [prom, dito] = dubble(6, 9);
console.log(prom, dito);
