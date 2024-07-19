var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNums = nums.filter(item => item % 2 !== 0);
// 箭头函数实现所有偶数平方的和

var sum = nums.filter(item => item % 2 === 0)
    .map(item => item * item)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum)
console.log(newNums)