
// function print(str) {
//   console.log(str)
// }
// // 字面量方式,常用
// var num = [1,5,6,10];
// print(num.length);   // 4

// // 构造函数方式
// var num = new Array(1,5,6,10);
// print(num.length);    // 4


// 浅复制
var num = [1,2,3,4,5];
var newNum = num;
num[0] = 10;
console.log(newNum[0]);  // 10

// 深复制
var num = [1,2,3,4,5];
const newNum = [...num]
num[0] = 10;
console.log(newNum[0]);    // 仍然为 1
