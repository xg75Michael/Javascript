/*
// Math 对象提供了用于计算的几个属性，还有便于计算的方法
alert(Math.E); // 2.718281828459045
alert(Math.PI); // 3.141592653589793


alert(Math.max(1,2,3,4,3,2,1)); // 4
// 数组中最大值
alert(Math.min(1,2,3,4,3,2,1)); // 1
// 数组中最小值


alert(Math.ceil(3.14)); // 4
// 向上取整
alert(Math.floor(3.14)); // 3
// 向下取整
alert(Math.round(3.4)); // 3
alert(Math.round(3.5)); // 4
// 四舍五入


// 返回 0 到 1 之间的随机数， 不包含 1
for (var i = 0; i < 5; i++) {
	console.log(Math.random());
}
// 进一步修改取得特定范围内的随机整数
for (var i = 0; i< 5; i++) {
	console.log(Math.floor(Math.random() * 10 + 5))
}
// 打印 5 到 15 之间的整数，不包括15


// 写成一个函数，返回 start 到 end 之间的随机数，包括自己
function selectionNum(start, end) {
	var total = end - start + 1;
	return Math.floor(Math.random() * total + start);
}
for (var i = 0; i < 10; i++) {
	console.log(selectionNum(10, 20));
}


// 其他方法
alert(Math.abs(-10)); // 10
alert(Math.sqrt(9)); // 3
// 等等
*/


// 其他方法
alert(Math.abs(-10)); // 10
alert(Math.sqrt(9)); // 3
// 等等








































