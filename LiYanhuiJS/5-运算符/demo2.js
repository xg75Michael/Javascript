/*
var box = 3 > 2; // 关系运算符大多数返回一个布尔值
alert(box); // false


var box = '3' > 22; // 如果只有一个数字字符串， 则转换成数值比较
alert(box); // false


var box = '3' > '22'; // 如果两个都是数值字符串， 则进行第一个字符数值比较
alert(box); // true


var box = '123' > '22';
alert(box); // false


var box = 2 > {}; // 如果有一个是对象则调用valueOf() 或 toString()
alert(box); // false


var box = 2 > {
	toString() {
		return 1;
	}
};
alert(box); // false


var box = 'a' > 'b'; // 97 > 98
alert(box);


var box = 'a' > 'B'; // 97 > 66
alert(box);


var box = false == 0;
alert(box); // true


var box = 2 == {};
alert(box); // false


var box = 2 == {
	toString() {
		return 2;
	}
};
alert(box); // true


var box = null == undefined;
alert(box); // true


var height = {};
var age = height;
var box = height == age;
alert(box); // true
// 引用对象比较的是引用地址


var box = 2 === 2;
var box2 = 2 === '2';
alert(box); // true
alert(box2); // false
// === 没有类型转换


var box = null == 0;
// null 自动转换为0， 但在比较运算上， null 和 undefined 没有自动转换
alert(box); // false


var box = '' == 0;
// '' 字符串在比较运算符上， 会自动转换
alert(box); // true


var box = (5>4) && (3>2); // && 并且 运算符， 只有两个都是true的时候返回true
alert(box); // true


var box = {} && 5;
alert(box); // 5


var box = true && {};
alert(box); // [object Object]


var box = false && {};
alert(box); // false
// 第二个是对象时， 第一个如果是true 返回对象， 如果是false 返回 false


var box = null && 5 > 4;
alert(box); // null 有一个null 则返回null


var box = false && null;
alert(box);
// && 属于短路操作， 如果第一个是false 则直接返回false 不运行第二个


var box = 3 > 4 && age;
alert(box); // 并没有 error 前面是false 不运行第二个


var box = 5 > 3 || 3 > 4; // || 运算符， 只要有一个是true 返回true
alert(box);  // true


var box = {} || 5>4; // 第一个是对象 则返回第一个操作数
alert(box);  // [object Object]


var box = false || 5; // 前面的是false 返回第二个操作数
alert(box);  // 5


var box = {
	toString() {
		return 1;
	}
} || {
	toString() {
		return 2;
	}
};
alert(box);  // 两个都是对象 返回第1个


var box = null || null;
alert(box); // null


var box = true || age;
alert(box); // true
// || 操作符也是短路操作， 第一个如果是 true 则不执行第二个
var box = false || age;
alert(box); // error


var age = 5;
var height;
var box = height || age;
alert(box); // 5 典型的赋值操作， 防止height 不存在


var box = !(5 > 4);
alert(box); // false
var box = !!(5 > 4);
alert(box); // true


var box = Boolean({});
alert(box); // true
var box = !!{};
alert(box); // true
// Boolean() 和 !! 是一样的效果



*/




var box = !!{};
alert(box); // true













































