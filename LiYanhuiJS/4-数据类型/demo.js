// typeof 操作符的用法
/*
var box;
alert(typeof box);
// box 是 Undefined类型， 值是undefined， 类型返回的字符串是 undefined


var box = true;
alert(typeof box);
// box 是 Boolean类型， 值是ture， 类型返回的字符串是 boolean


var box = 'Michael';
alert(typeof box);
// box 是 String类型， 值是'Michael'， 类型返回的字符串是 string


var box= 250;
alert(typeof box);
// box 是 Number类型， 值是250， 类型返回的字符串是 number


var box = {};
// 空的对象，表示这个对象创建了，里面没有东西
alert(typeof box);
// box 是 Object类型， 值是[object Object]， 类型返回的字符串是 object


var box = null;
alert(typeof box);
// box 是 Null类型， 值是null， 类型返回的字符串是 object


var box = new Object();
alert(typeof box);
// box 是 Object类型， 值是[object Object]， 类型返回的字符串是 object


function box(){};
alert(typeof box);
// box 是 Function 函数， 值是function box(){}， 类型返回的字符串是 function

alert(typeof 'Michael'); 可以使用字面量


var box = undefined; // 没有必要
alert(box);


var box;
alert(box);
alert(nothing); // 以后必须声明变量的时候就初始化，以避免这种问题；


var box = {};
if (box != null) { // 不等于null，说明不是空对象；
	alert('succese');
}


var box = null; 
// 表示还没有创建，但先声明这个对象的变量的时候初始化赋值一个null
box = {1:1};
alert(box);


var box = ''; // 初始化字符串用空字符串
var box = 0; // 初始化数字用0
var box = false; // 初始化布尔值用false或者true


alert(undefined == null); // 都是空的，所以相等
alert(undefined === null); // 类型不同，所以不相等


alert(typeof undefined == typeof null); // 区分undefined 和 null


var box = '';
alert(Boolean(box)); // false
// 使用了显式转换 Boolean 方法


var box = '';
if (box) {
	alert('is ture');
} else {
	alert('is false');
};
// is false
// 隐式的转换成 Boolean 



*/


var box = NaN;
if (box) {
	alert('is ture');
} else {
	alert('is false');
}
























