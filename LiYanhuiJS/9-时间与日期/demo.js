/*
// new Date() 在每个浏览器中表现有所不同
var box = new Date(); // 如果没有参数， 获取当前的时间
alert(box); // Fri Oct 18 2019 16:08:02 GMT+0800 (CST)


// Date.parse() Date的静态方法之一
// 接受字符串形式的时间
var box = Date.parse('1/10/2019'); // 返回一个毫秒数
alert(box); // 1547049600000
alert(new Date(box)); // Thu Jan 10 2019 00:00:00 GMT+0800 (CST)
// 利用 Date() 把毫秒数转换成时间


var box = new Date('1547049600000');
alert(box); // Invalid Date
// 可以接受数组形式的毫秒数， 但是字符串形式的毫秒数则超过计算范围


var box = new Date('1/10/2019');
// Date() 遇到字符串的时候会在后台自动调用 Date.parse() 方法
alert(box); // Thu Jan 10 2019 00:00:00 GMT+0800 (CST)


var box = Date.parse(); // 必须传递参数
var box2 = Date.parse('1,1,1'); // 参数必须是日期格式
alert(box); // NaN
alert(box2); // NaN


var box = new Date('asdf 21 123'); // 无法解析
alert(box); // Invalid Date
// 注意每个浏览器解析的不同， 返回值的也不同


var box = new Date('Oct 1 2019');
alert(box); // Tue Oct 01 2019 00:00:00 GMT+0800 (CST)


var box = new Date('Tue Oct 01 2019 00:00:00 GMT+0800 (CST)');
alert(box); // Tue Oct 01 2019 00:00:00 GMT+0800 (CST)


var box = new Date('January 32 2019');
alert(box); // Invalid Date



*/























































