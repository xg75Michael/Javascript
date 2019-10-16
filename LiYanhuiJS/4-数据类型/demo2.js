//
/*
var box = 250; // 十进制整型
alert(box);


var box = 070; // 八进制
alert(box);


var box = 079; // 无效八进制 自动无视前置0
alert(box);


var box = 0x1f; // 无效八进制 自动无视前置0
alert(box);


var box = 3.8; // 浮点型
alert(box);

var box = 03.8; // 报错 浮点型前面不能有0
alert(box);


var box = .8; // 不推荐
alert(box);


var box = 8.0;
// 浮点型内存比整型大2倍，JS会自动尝试转换成整型
alert(box);


var box = 8.12e3; // 科学计数法
alert(box);


var box = 0.0000000812; // 科学计数法
alert(box);


alert(0.1+0.2); // 0.30000000000000004
// 不要用浮点数做精确比较


alert(Number.MIN_VALUE); // 最小值
alert(Number.MAX_VALUE); // 最大值


alert(100e1000); // Infinity
alert(-100e1000); // -Infinity
alert(Number.POSITIVE_INFINITY);
alert(Number.NEGATIVE_INFINITY);


var box = 100e10;
alert(isFinite(box)); // 是否超过范围


var box = 0/0; // NaN
alert(box);
var box = 12/0*0; // Infinity*0 == NaN
alert(box);


alert(Number.NaN);

// NaN 和任何值运算都是 NaN， 不等于任何数值， 不等于自己


alert(isNaN(0/0)); // true
alert(isNaN('Michael')); // true
alert(isNaN('123')); // false
// isNaN() 会调用 toString() 方法再测试返回值
// 如果对象的toString方法能够返回数值，则不是NaN
var box = {
	toString() {
		return 123;
	}
};
alert(isNaN(box));


// 数值转换3个方法： Number(), parseInt(), parseFloat()
// Number()适用于任何类型, 但规则太多， 不常用
alert(Number(true)); // 1
alert(Number(null)); // 0
alert(Number(undefined)); // NaN


// parseInt(); 只能转换字符串, 可以识别八进制， 十六进制， 可选第二个参数
alert(parseInt('123Lee')); // 123
alert(parseInt('as123asdf')); // NaN
alert(parseInt('12as123asdf')); // 12
alert(parseInt('56.12')); // 56
alert(parseInt('')); // NaN


// parseFloat(); 只能转换字符串
alert(parseFloat('0xA')); // 不识别十六进制
alert(parseFloat('8.12.13')); // 8.12 只识别一个小数点
alert(parseFloat('008.1200')); // 8.12 去掉前置和后置的0

*/





