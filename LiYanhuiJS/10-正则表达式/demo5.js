/*
var pattern = /^[a-z]+\s[0-9]{4}$/;
var str = 'google 2019';
alert(pattern.exec(str)); // google 2019
alert(typeof pattern.exec(str)); // object
// exec() 方法返回一个包含匹配字符串的数组


var pattern = /^[a-z]+/; // 只匹配字母
var str = 'google 2019';
alert(pattern.exec(str)); // google


var pattern = /^([a-z]+)\s([0-9]{4})/; // 使用了分组
var str = 'google 2019';
var a = pattern.exec(str); // google 2019,google,2019
alert(a.length);
alert(a[0]); // google 2019  返回匹配到的整个字符串
alert(a[1]); // google  返回匹配到的第一个捕获组的字符串
alert(a[2]); // 2019  返回匹配到的第二个捕获组的字符串


var pattern = /(\d+)([a-z])/; // 捕获行分组， 所有的分组都捕获返回
var str = '123abc';
var a = pattern.exec(str); // 123a,123,a


var pattern = /(\d+)(?:[a-z])/; // 非捕获性分组， 在不需要捕获的分组前添加 ?:
var str = '123abc';
alert(pattern.exec(str)); // 123a,123  并没有捕获后面的 a


var pattern = /(a?(b?(c?)))/; // 嵌套分组， 从外往内获取
var str = 'abc';
var a = pattern.exec(str);
alert(a); // abc,abc,bc,c
// 第一步 a[0], 匹配整个字符串 abc
// 第二步 a[1], 匹配整个第一个分组 (a?(b?(c?))), abc
// 第三步 a[2], 匹配整个第二个分组 (b?(c?)), bc
// 第四步 a[3], 匹配整个第三个分组 (c?), c


var pattern = /goo/; // 简单的匹配 goo
var str = 'goobbbbbbb';
alert(pattern.exec(str)); // goo


var pattern = /goo(?=gle)/; // goo 后面必须是 gle 才能返回goo， 注意 返回的是goo
var str = 'google';
alert(pattern.exec(str)); // goo  返回goo， 而不是google， 前瞻性捕获


var pattern = /\[/; // 使用反斜杠 \ 来转义特殊字符 [
var str = '['
alert(pattern.exec(str)); // [


var pattern = /^\d+/g; // 限定首匹配
var pattern2 = /^\d+/gm; // 限定首匹配 并且开启多行模式
var str = '1.baidu\n2.google\n3.bing';
alert(str.replace(pattern, '#'));
//#.baidu
//2.google
//3.bing
alert(str.replace(pattern2, '#'));
//#.baidu
//#.google
//#.bing
*/


var pattern = /^\d+/g; // 限定首匹配
var pattern2 = /^\d+/gm; // 限定首匹配 并且开启多行模式
var str = '1.baidu\n2.google\n3.bing';
alert(str.replace(pattern, '#'));
//#.baidu
//2.google
//3.bing
alert(str.replace(pattern2, '#'));
//#.baidu
//#.google
//#.bing


















































