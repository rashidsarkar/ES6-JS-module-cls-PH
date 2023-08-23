const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(2, 3, 4));
const string = `i am a web Developer.
I love to code . 
i love to eat birany
`;
console.log(string);
const sum = (num1, num2 = 0) => num1 + num2;
console.log(sum(4, 5));

const myMathWork = (arr) => {
  let squre = [];
  let sum = 0;
  for (let num of arr) {
    squre.push(Math.pow(num, 2));
  }
  for (let num of squre) {
    sum += num;
  }
  return sum / squre.length;
};
console.log(myMathWork([1, 2]));
/*
a. square each array Element
b.calculate the sum of the squared Element
c.return the average of yhe sum of the squared element
*/
