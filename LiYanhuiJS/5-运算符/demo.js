/*
var box = 100;
++box; // 前置递增， box = box + 1
alert(box);


var box = 100;
box++; // 后置递增， box = box + 1
alert(box);
// 前置是先运算再赋值， 后置是先赋值再运算；


var box = 100;
var age = ++box;
alert(age); // 101;


var box = 100;
var age = box++;
alert(age); // 100;
alert(box); // 101;


var box = '89';
alert(++box); // 90, ++自动转型功能
alert(typeof box); // number


var box = 'ab';
box++;
alert(box); // NaN, ++自动转型功能


var box = false;
box++;
alert(box); // 1, ++自动转型功能


var box = {};
alert(typeof box); // object
alert(typeof +box); // number 单个加号也可以转换类型


var box = {};
var box2 = {
	toString: function() {
		return 1;
	}
};
var box3 = {
	toString() {
		return 1;
	},
	valueOf() {
		return 111;
	}
};
box++;
box2++;
box3++;
alert(box); // NaN, ++自动转型功能
alert(box2); // 2, ++自动调用对象的 valueOf() 方法
alert(box3); // 112, ++优先调用 valueOf() 方法


var box = 1+2;
alert(box); // 3


var box = 1 + NaN;
alert(box); // NaN;


var box = Infinity + Infinity;
alert(box); // Infinity;


var box = Infinity + -Infinity;
alert(box); // NaN;


var box = 100 + '100'; // 只要有一个是字符串，就是string拼接
alert(box); // 100100, string 类型


var box = 100 + 100 + '100';
alert(box); // 200100, 先计算数字200， 再拼接字符串


var box = '这里有' + (100 + 100); // () 强制优先级
alert(box); // 这里有200


var box = 10 + {};
alert(box); // 10[object Object]
alert(typeof box); // string 类型


var box = 10 + {
	toString() {
		return 20;
	}
};
alert(box); // 30
alert(typeof box); // number 类型, 对象 toString() 返回的是什么类型之后再计算


var box = 100 / null; // null 转换成0
alert(box); // infinity


var box = 100 / {
	toString() {
		return 10;
	}
}
alert(box); // 10


var box = 100 % 3;
alert(box); // 1


var box = 100 % {
	toString() {
		return 3;
	}
};
alert(box); // 1
*/



var box = 100 % {
	toString() {
		return 3;
	}
};
alert(box); // 1




