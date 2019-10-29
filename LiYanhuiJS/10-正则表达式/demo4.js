/*
var pattern = /goo gle/; // 直接使用空格匹配
var str = 'goo gle';
alert(pattern.test(str)); // true


var pattern = /goo\sgle/; // \s 匹配空格
var str = 'goo gle';
alert(pattern.test(str)); // true


var pattern = /google\b/; // \b 匹配边界
var str = 'google';
var str2 = 'googleasdf';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false


var pattern = /google|baidu|bing/; // | 表示 或
var str = 'google';
var str2 = 'baidu';
var str3 = 'here is bing';
var str4 = 'sosososo';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // true
alert(pattern.test(str4)); // true


var pattern = /(google){4,8}/; // 小括号 分组， 可以看成一个字符， 表示 google 4-8 次
var str = 'google';
var str2 = 'googlegooglegooglegoogle';
alert(pattern.test(str)); // false
alert(pattern.test(str2)); // true


var pattern = /8(.*)8/; // 匹配 8 加上 8 和它们之间任何字符
// 捕获 8 和 8 之间的字符串
var str = 'this is a 8google8';
alert(pattern.test(str)); // true
alert(RegExp.$1); // google
// 运行正则后 可以打印捕获组第一组


var pattern = /8(.*)8/;
var str = 'This is a 8goooooooooogle8';
document.write(str.replace(pattern, '<strong>$1</strong>'));
// 利用捕获组来动态替换文字 并写入 HTML 页面中


var pattern = /(.*)\s(.*)/;
var str = 'google baidu';
alert(str.replace(pattern, '$2 $1')); // 交换捕获组的位置


// 贪婪和惰性问题
var pattern = /[a-z]+/; // 单个 + 号 是贪婪模式
var str = 'abcdefg';
alert(str.replace(pattern, '1')); // 1  所有的字母被替换成了一个 1


var pattern = /[a-z]+?/; // +? 是惰性模式
var str = 'abcdefg';
alert(str.replace(pattern, '1')); // 1bcdefg  只有一个匹配的字母被替换成了 1


var pattern = /[a-z]+?/g; // +? 是惰性模式 再加上 g 的全局标识符
var str = 'abcdefg';
alert(str.replace(pattern, '1')); // 1111111  每一个匹配的字母都被替换成了 1


var pattern = /[a-z]+/g; // 贪婪模式 再加上 g
var str = 'abcdefg';
alert(str.replace(pattern, '1')); // 1


var pattern = /8(.*)8/; // 使用了贪婪模式
var str = '8google8 8google8 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));
// 匹配到了 google8 8google8 8google: <strong>google8 8google8 8google</strong>


var pattern = /8(.*?)8/g; // 惰性模式 加 g 全局模式
var str = '8google8 8google8 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));
// 匹配到了 google google google: <strong>google</strong> <strong>google</strong> <strong>google</strong>


var pattern = /8([^8]*)8/g; // 另一种类似的惰性方法， 屏蔽两边的包含字符
var str = '8google8 8google8 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));
// 匹配到了 google google google: <strong>google</strong> <strong>google</strong> <strong>google</strong>



*/


var pattern = /8([^8]*)8/g; // 另一种类似的惰性方法， 屏蔽两边的包含字符
var str = '8google8 8google8 8google8';
document.write(str.replace(pattern, '<strong>$1</strong>'));
// 匹配到了 google google google: <strong>google</strong> <strong>google</strong> <strong>google</strong>























































