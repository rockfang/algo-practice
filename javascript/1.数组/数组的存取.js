var word = ["A","B","C","D"];
var result = word.indexOf("A");
console.log(result);    // 0
var test = word.indexOf("F");
console.log(test);   // -1
var arr = ["Mike","John","Hexo"];
console.log(arr.join());   // Mike,John,Hexo
console.log(arr.toString());   // Mike,John,Hexo

var arr1 = [1,10,"Mike"];
var arr2 = [8,7,6];
var cat = arr1.concat(arr2);
console.log(cat);    // [1, 10, "Mike", 8, 7, 6]
var num = [1,2,3,4,5,6,7];
var a = num.splice(3,2);     // 3 表示索引，2 表示删除 2 个
console.log(num);      // [1, 2, 3, 6, 7]    


function compare(num1,num2){
  return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);    // 1, 2, 3, 4, 100, 200
