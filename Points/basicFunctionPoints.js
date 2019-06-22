// function 没有重载，重新声明同名函数将覆盖前者
function addNumb(num) {
	return num + 100;
}
function addNumb(num) {
	return num + 200;
}
var result = addNumb(100); //300

// 函数声明和函数表达式基本一样，但是只有函数声明会hosting
alert(sumHosting(10, 10)); //unexpected identifier
var sumHosting = function(num1, num2) {
	return num1 + num2;
};

// function 内部特殊的对象： arguments和this
// 可以使用arugments。callee来写递归函数，有效的防治了函数名变化而导致的错误
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		// return (num * factorial(num - 1));
		return (num * arguments.callee(num - 1));
	}
}
factorial(4); // 24

// ECMAScript 5 规范了另一个属性 caller，返回调用当前函数的函数的引用
function outer() {
	inner();
}
function inner() {
	// alert(inner.caller);
	alert(arguments.callee.caller);
}
outer(); // function outer() {inner();}

// function 属性和方法, length 和 prototype
// length 返回参数的数量
function alertLength() {
	alert("hi");
}
function alertLength1(name) {
	return name;
}
function alertLength2(name1, name2) {
	return (name1 + name2);
}
alert(alertLength.length);  // 0
alert(alertLength1.length); // 1
alert(alertLength2.length); // 2

// call() 和 apply(),基本一样，除了传参有区别。
function callApply(num1, num2) {
	return num1 + num2;
}
function callSum(num1, num2) {
	return callApply.apply(this, arguments);
	// return callApply.apply(this, [num1, num2]); // 一样的效果
	// return callApply.call(this, num1, num2);    // 一样的效果
}

// 主要用途是扩充函数的作用域
window.color = "red";
var o = {color: "blue"};
function sayColor() {
	alert(this.color);
}
sayColor(); // red
sayColor.call(this); // red
sayColor.call(window); // red
sayColor.call(o); // blue
// bind 函数会返回一个函数的实例，其this值会绑定传给bind()函数
// bind 浏览器支持： IE9+，Firefox4+，Safari5.1+，Opera12+和Chrome
var bindSayColor = sayColor.bind(o);
bindSayColor(); // blue
// toLocaleString() 和 toString() 都会返回函数的代码。

// 基本包装类型
var objString = new Object("some text");
alert(objString instanceof String); // true
var objNumber = new Object(25);
alert(objNumber instanceof Number); // true
var objBoolean = new Object(true);
alert(objBoolean instanceof Boolean); // true

var objValue = "25";
var objTest = new Number(objValue); // 构造函数
alert(typeof objTest); // "object"

/*
Boolean 类型重写了valueOf() 方法，返回基本类型true 或 false
重写了toString() 方法，返回字符串"true" 或 "false"
慎用 new Boolean() ，会造成误解。
*/

/*
Number 类型重写了valueOf(), toLocaleString(), toString() 方法。
valueOf() 返回基本类型数值，其他两个返回字符串形式的数值
*/
//还有toFixed() 方法可以返回小数
var numTest = 10;
// 参数2表示小数点后几位数
alert(numTest.toFixed(2)); // "10.00"
var numTest2 = 10.005;
// toFixed() 方法可以自动舍入
alert(numTest2.toFixed(2)); // "10.01"
// toExponential() 方法会返回指数表示法
alert(numTest.toExponential(1)); // "1.0e+1"
// toPrecision() 会根据数值来判断用使用toFixed() 还是 toExponential()
var numP = 99;
alert(numP.toPrecision(1)); // "1e+2"
alert(numP.toPrecision(2)); // "99"
alert(numP.toPrecision(3)); // "99.0"

// String 类型是字符串的对象包装类型
var strObj = new String("I am a string");
var stringValue = "hello world"
alert(strObj.length);
// 字符串方法 charAt() charCodeAt()
alert(stringValue.charAt(1)); // e
alert(stringValue.charCodeAt(1)); // 101 因为e的字符编码是 101
alert(stringValue[1]); //e

// 字符串操作方法 concat() 返回拼接得到的新字符串
var strConcat = "hello ";
var resultConcat = strConcat.concat("world", "!")
alert(resultConcat); // "hello world!"
alert(strConcat); // "hello "
// slice(), substr(), substring() 返回字符串的子字符串
// 第一个参数是起始位置，第二个参数是结束位置-1，substring 第二个参数是长度
var strSSS = "hello world!";
alert(strSSS.slice(3)); // "lo world!"
alert(strSSS.substring(3)); // "lo world!"
alert(strSSS.substr(3)); // "lo world!"
alert(strSSS.slice(3, 7)); // "lo w"
alert(strSSS.substring(3, 7)); // "lo w"
alert(strSSS.substr(3, 7)); // "lo worl"

alert(strSSS.slice(-3)); // "ld!"
alert(strSSS.substring(-3)); // "hello world!"
alert(strSSS.substr(-3)); // "ld!"
alert(strSSS.slice(3, -4)); // "lo wo"
alert(strSSS.substring(3, -4)); // "hel"
alert(strSSS.substr(3, -4)); // ""

// indexOf() 和 lastIndexOf() 字符串位置查找方法
alert(strSSS.indexOf("o")); // 4
alert(strSSS.lastIndexOf("o")) // 7
alert(strSSS.indexOf("o", 6)); // 7
alert(strSSS.lastIndexOf("o", 6)); // 4

// trim() 方法是把前置和后置的空格删除
var strTrim = "         hi with some spaces         ";
var trimedStrValue = strTrim.trim();
alert(strTrim);
alert(trimedStrValue);

// toLowerCase(), toLocaleLowerCase(), toUpperCase(), toLocaleUpperCase()
// 4个方法改变大小写，不知道运行环境的情况下使用地区方法更好一点

// match() 方法与RegExp中的exec() 一样，接受一个参数，返回匹配的数组
var textMatch = "cat, bat, sat, fat";
var pattern = /.at/;
// 与pattern.exec(text) 相同
var matches = textMatch.match(pattern);
alert(matches.index); // 0
alert(matches[0]); // "cat"
alert(pattern.lastIndex); // 0
// search() 方法接受的参数是一样的，
var resultSearch = textMatch.search(/at/);
alert(resultSearch); // 1
// replace() 方法接受两个参数
// 想替换所有的字符串需要第一个参数为正则表达式同时有/g
var resultReplace = textMatch.replace("at", "ond");
alert(resultReplace); // "cond, bat, sat, fat"
var resultReplaceAll = textMatch.replace(/at/g, "ond");
alert(resultReplaceAll); // "cond, bond, sond, fond"
// replace() 方法第二个参数可以说是函数
// 下面的函数是替换 < > & \ 符号
function htmlEscape(text) {
	return text.replace(/[<>"&]/g, function(match, pos, originalText) {
		switch(match) {
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "\"":
				return "&quot;";

		}
	});
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
// &lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

// split() 方法根据第一个参数将字符串分隔并返回成一个数组
var textSplit = "red,blue,green,yellow";
var resultSplit1 = textSplit.split(","); // ["red", "blue", "green", "yellow"]
var resultSplit2 = textSplit.split(",", 2); // ["red", "blue"]
var resultSplit3 = textSplit.split(/[^\,]+/); // [",",",",",",","]

// localeCompare() 方法用来比较参数和字符串，返回0，1，-1
var strCompare = "yellow";
alert(strCompare.localecompare("brick")); // 1
alert(strCompare.localecompare("yellow")); // 0
alert(strCompare.localecompare("zoo")); // -1
// 注意.compare() 方法根据地区不用行为不同

// fromCharCode() 方法编码转换字符串
alert(String.fromCharCode(104,101,108,108,111)); // "hello"






