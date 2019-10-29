/*
var box = new RegExp('box'); // 第一个参数是模式字符串
alert(box); // /box/


var box = new RegExp('Box', 'ig'); // 第二个参数可选， 模式修饰符
alert(box); // /Box/gi


var box = /Box/; // 使用字面量方式创建的正则
alert(box); // /Box/


var box = /Box/gi; // 字面量带第二个参数
alert(box); // /Box/gi


// 测试正则表达式方法
// test() 返回true 或 false
// exec() 返回匹配到的字符串
var pattern = /Box/;
var pattern2 = /Box/i;
var str = 'box';
alert(pattern.test(str)); // false
alert(pattern2.test(str)); // true
// 可以不使用变量
alert(/BoX/i.test('box')); // true
alert(/Box/i.test('here is a box')); // true



*/

var pattern = /Box/i;
var str = 'box';
var str2 = 'xxx';
alert(pattern.exec(str)); // box
alert(typeof pattern.exec(str)); // object  返回的是数组
alert(pattern.exec(str2)); // null  没匹配到的时候返回null



















































