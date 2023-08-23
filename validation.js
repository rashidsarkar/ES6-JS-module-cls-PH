function add(num = 0, num2 = 0) {
  let sum = num + num2;
  console.log(num, num2, sum);
  return sum;
}
const sum = add(5);
const aa = (num1, num2) => num1 + num2;
console.log(aa(1, 3));
