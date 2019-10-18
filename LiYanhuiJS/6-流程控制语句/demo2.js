/*
var box = 1;
do { // 先运行再判断的循环体
	alert(box); // 先打印出1
	box++; // box = 2
} while (box <= 5); // 再判断， true 的话再运行循环体


do {
	alert('at least one time'); // do while 至少执行一次
} while (false);
// 注意死循环的问题


var box = 10;
while (box <= 5) { // while 是先运行再判断的循环体
	alert(box);
	box++;
}


for (var box = 1; box <= 5; box++) {
// 第一步， 声明变量 box = 1;
// 第二步， 判断 box <= 5, 如果返回true执行第三步， 否则退出
// 第三步, alert(box), 输出box
	alert(box);
}


// for ... in ... 迭代对象的属性
var box = { // 这个对象有三个属性 name, age, height
	'name': 'Michael',
	'age': 28,
	'height': 178
};
for (var i in box) {
	alert(i);
}


for (var box = 1; box <= 10; box++) {
	if (box == 5) {
		break;
	}
	document.write(box + '</br>');
}


for (var box = 1; box <= 10; box++) {
	if (box == 5) {
		continue;
	}
	document.write(box + '</br>');
}


var box = {
	'name': 'Michael',
	'age': 28,
	'height': 178
};
with (box) { // 可以将 box. 省略掉
	var n = name; // 相当于 box.name
	var a = age;
	var h = height;
}
// 相当于 
//var n = box.name;
//var a = box.age;
//var h = box.height;
alert(n + a + h);
*/





var box = {
	'name': 'Michael',
	'age': 28,
	'height': 178
};
with (box) { // 可以将 box. 省略掉
	var n = name; // 相当于 box.name
	var a = age;
	var h = height;
}
// 相当于 
//var n = box.name;
//var a = box.age;
//var h = box.height;
alert(n + a + h);































