function Point(x,y){
  this.x = x;
  this.y = y;
}
function show(arr){
  for(var i=0;i<arr.length;i++){
    console.log(arr[i].x + ", "+arr[i].y);
  }
}
var p1 = new Point(1,2);
var p2 = new Point(2,4);
var p3 = new Point(8,1);
var p4 = new Point(2,9);
var point = [p1,p2,p3,p4];
for(var i=0;i<point.length;i++){
  // console.log("Point "+parseInt(i+1)+": "+point[i].x+", "+point[i].y);
}
var p5 = new Point(11,13);
point.push(p5);
console.log("添加了 p5 后：");
show(point);     
point.shift();
console.log("删除第一个元素后：")
show(point);