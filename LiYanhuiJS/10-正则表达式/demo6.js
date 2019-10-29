/*
// 常用正则表达式的匹配
// 建议先写字符串， 然后根据字符串写正则表达式


// 邮政编码的匹配
var str = 'Post Code is 116033'; // 必须是6位， 必须是数字， 第一位不能为0
var pattern = /[1-9]\d{5}/;
alert(pattern.test(str)); // true


// 压缩文件名的匹配
var str = '123abc.gz'; // 文件名： 字母 _ 数字 . zip, gz, rar, 7z
var pattern = /^\w+\.(?:zip|gz|rar)$/; // 由于优先级问题， | 的选项必须用 () 符号包含起来
alert(pattern.exec(str)); // true


// 删除多余空格
var str = '111 222 333 444';
var pattern = /\s/g;
alert(str.replace(pattern, '')); // 111222333444


// 删除首位空格
var str = '     goo  gle        ';
var pattern = /^\s+/;
var result = str.replace(pattern, '');
alert('|' + result + '|'); // |goo  gle        |  添加 | 更直观的看到结果
pattern = /\s+$/;
result = result.replace(pattern, '');
alert('|' + result + '|'); // |goo  gle|  使用两次正则替换

var str = '     goo  gle        ';
var pattern = /^\s+(.+)\s+$/; // (.+) 是贪婪模式
var pattern2 = /^\s+(.+?)\s+$/; // (.+?) 是惰性模式
var result = pattern.exec(str)[1];
var result2 = pattern2.exec(str)[1];
alert('|' + result + '|'); // |goo  gle       |
alert('|' + result2 + '|'); // |goo  gle|

var str = '     goo  gle        ';
var pattern = /^\s+(.+?)\s+$/; // (.+) 是贪婪模式
var result = str.replace(pattern, '$1')
alert('|' + result + '|'); // |goo  gle|


// 简单的电子邮件正则
var str = 'michaelgao@gmail.com';
var pattern = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
alert(pattern.test(str)); // true
*/


var str = 'michaelgao@gmail.com';
var pattern = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
alert(pattern.test(str)); // true













































