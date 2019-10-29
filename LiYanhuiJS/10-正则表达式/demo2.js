/*
// String 对象中的正则表达式方法


var pattern = /Box/gi;
var str = 'This is a Box, and that is a box!';
alert(str.match(pattern)); // Box,box  g 修饰符查找所有的字符串
alert(typeof str.match(pattern)); // object  match 方法返回的是数组
alert(str.match(pattern) instanceof Array); // true
alert(Array.isArray(str.match(pattern))); // true


var pattern = /Box/gi;
var str = 'This is a Box, and that is a box!';
alert(str.search(pattern)); // 10  search 方法返回的是第一个匹配的位置
// search 方法直接返回查找的第一个匹配项， 无需 g 修饰符
var str2 = 'Here is no that thing!';
alert(str2.search(pattern)); // -1  search 方法找不到的时候返回 -1


var pattern = /Box/i; // 无 g 修饰符
var str = 'This is a Box, and that is a box!';
alert(str.replace(pattern, 'Tom')); // This is a Tom, and that is a box!
// 返回的字符串只替换第一个


var pattern = /Box/gi; // 有 g 修饰符
var str = 'This is a Box, and that is a box!';
alert(str.replace(pattern, 'Tom')); // This is a Tom, and that is a Tom!
// 替换所有的匹配项


var pattern = / /gi; // 按照空格切分， 有 g 修饰符
var str = 'This is a Box, and that is a box!';
alert(str.split(pattern)); // This,is,a,Box,,and,that,is,a,box!
alert(str.split(pattern).length); // 9  长度为9 的数组


// RegExp 对象的静态属性
var pattern = /(g)oogle/i;
var str = 'This is a google!';
pattern.test(str); // 必须执行一下， 静态属性才有效
alert(RegExp.input); // This is a google!
alert(RegExp.leftContext); // This is a 
alert(RegExp.rightContext); // !
alert(RegExp.lastMatch); // google
alert(RegExp.lastParen); // g  小括号的捕获组
alert(RegExp.multiline); // false  不支持多行匹配


// RegExp 对象的实例属性

*/



var pattern = /(g)oogle/gi;
alert(pattern.global); // true
alert(pattern.ignoreCase); // true
alert(pattern.multiline); // false
alert(pattern.source); // (g)oogle
alert(pattern.lastIndex); // 0  上次匹配的最后位置
var str = 'google google google';
pattern.test(str);
alert(pattern.lastIndex); // 6  上次匹配的最后位置（第一个 google 结束的位置）
pattern.test(str);
alert(pattern.lastIndex); // 13  上次匹配的最后位置（第二个 google 结束的位置）
pattern.lastIndex = 100;
alert(pattern.lastIndex); // 100 可以手动设置





















































