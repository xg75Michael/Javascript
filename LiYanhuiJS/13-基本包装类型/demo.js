/*
// 为了操作基本类型的值， ECMAScript 提供了3个特殊的引用类型
// 比如每当读取一个基本类型的数值的时候，后台会创建对应的基本包装类型从而可以调用一些方法，之后再销毁


var box = 'Michael';
alert(box); // Michael
alert(typeof box); // string
alert(box.substring(2));  // chael
// 此处是对象调用方法的写法，JS 会在后台创建一个 String 的包装引用类型
// 在运行完 substring() 方法之后再销毁这个基本包装类型
alert('Michael'.substring(2)); // chael
// 直接调用也是有效的


var box = 'Michael'; // 基本类型
box.name = 'Gao'; // 给基本类型加方法
box.age = function() { // 给基本类型加方法
	return 100;
};
alert(box); // Michael
alert(typeof box); // String
alert(box.name); // undefined
alert(box.age()); // error  出错，不是方法
// 基本类型无法给自己添加自定义属性和方法，只可以调用内置的属性和方法


var box = new String('Michael'); // String 的基本包装引用类型
box.name = 'Gao';
box.age = function() {
	return 100;
};
alert(box); // Michael
alert(typeof box); // object
alert(box.name); // Gao
alert(box.age()); // 100
// 不建议使用基本包装引用类型，不方便区分基本类型和引用类型


// Nunber 中提供了一些静态属性
var box = 100;
alert(box.MAX_VALUE); // 这是正常的属性
alert(Number.MAX_VALUE); // 1.7976931348623157e+308
// 这是静态属性


// Number 对象中特殊的方法
var box = 1000;
alert(typeof box); // number
alert(box.toString()); // 1000
alert(typeof box.toString()); // string
alert(box.toLocaleString()); // 1,000  本地化
var box2 = 100.123
alert(box2.toFixed(2)); // 100.12  进行四舍五入
alert(box2.toExponential()); // 1.00123e+2  以指数形式表示
alert(box2.toPrecision(2)); // 1.0e+2  根据传参合理的表示数字
*/




var box2 = 100.123
alert(box2.toFixed(2)); // 100.12  进行四舍五入
alert(box2.toExponential()); // 1.00123e+2  以指数形式表示
alert(box2.toPrecision(2)); // 1.0e+2  根据传参合理的表示数字













































