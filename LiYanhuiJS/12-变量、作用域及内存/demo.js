/*
// JS 的变量是松散型， 只是在特定时间用于保存特定值的一个名字而已
// 两种类型， 基本类型保存在栈中， 引用类型在堆中， 变量中保存的只是一个指针
// 基本类型： UUndefined, Null, Boolean, Number, String, 按照值访问


var box = new Object();
box.name = 'Michael'; // 添加属性
alert(box.name);


var box = 'Michael'; // String基本类型
box.age = 28; // 添加属性
alert(box.name); // undefined
// 不是引用类型无法输出


// 赋值变量值， 基本类型是值本身， 引用类型是复制的地址
var box = 'Michael';
var box2 = box;
box2 = 'Someone';
alert(box); // Michael
alert(box2); // Someone
// 相对独立， 互不影响


var box = new Object();
box.name = 'Michael';
var box2 = box;
alert(box2.name); // Michael
box2.name = 'Someone';
alert(box2.name); // Someone
alert(box.name); // Someone
// 指向同一个地址， 修改堆内存中的对象会影响所有的引用


function box(obj) { // 传递引用类型的参数，但是并不是按引用传递，是按值传递的
	obj.name = 'Michael';
	var obj = new Object(); // 实际上是断开了与全局 obj 的连接，函数中的参数都是局部变量
	obj.name = 'Someone';
}
var obj = new Object();
box(obj);
alert(obj.name); // Michael


var box = 'Michael';
alert(typeof box); // string
// typeof 一般用于检测基础类型


var box = [1,2,3];
alert(typeof box); // object
var box2 = {};
alert(typeof box2); // object
var box3 = /abc/;
alert(typeof box3); // object
// 检测引用类型的时候都返回 object
// 所以要使用 instanceOf 方法来检测


var box = [1,2,3];
alert(box instanceof Array); // true
var box2 = {};
alert(box2 instanceof Object); // true
var box3 = /abc/;
alert(box3 instanceof RegExp); // true
var box4 = {};
alert(box4 instanceof RegExp); // false


var box = 'abc';
alert(box instanceof String); // false
var boxx = new String('abc');
alert(boxx instanceof String); // true
var box2 = 123;
alert(box2 instanceof Number); // false
var boxx2 = new Number(123);
alert(boxx2 instanceof Number); // true
// 检测基本类型的时候 instanceof 只有在基本类型是基本包装类型的时候才会返回 true

*/




var box = 'abc';
alert(box instanceof String); // false
var boxx = new String('abc');
alert(boxx instanceof String); // true
var box2 = 123;
alert(box2 instanceof Number); // false
var boxx2 = new Number(123);
alert(boxx2 instanceof Number); // true
// 检测基本类型的时候 instanceof 只有在基本类型是基本包装类型的时候才会返回 true











































