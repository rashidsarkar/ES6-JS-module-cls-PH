const maxNum = (arr1, arr2) => {
  let newNum = [...arr1, ...arr2];
  let max = 0;
  for (let num of newNum) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
let num1 = [4, 6, 12, 84, 26, 4];
let num2 = [56, , 78, 741, 21, 3, 584, 4, 6];
console.log(maxNum(num1, num2));
