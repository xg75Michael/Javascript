/*
// 正则里的元字符
// 可以参照 https://github.com/xg75Michael/Javascript/blob/master/Points/JavaScriptES5.md
// 中的 RegExp 对象


var pattern = /google/;
var str = 'google';
alert(pattern.test(str)); // true
var pattern2 = /g..gle/; // 使用 . 元字符 匹配除了换行符外的任何字符
var str2 = 'google';
var str3 = 'gbbgle';
var str4 = 'g\n\ngle';
alert(pattern2.test(str2)); // true
alert(pattern2.test(str3)); // true
alert(pattern2.test(str4)); // false  不匹配换行符 \n


var pattern = /go*gle/; // *  表示至少0个
var str = 'gooooogle';
alert(pattern.test(str)); // true


var pattern = /go+gle/; // +  匹配至少一个
var str = 'gooooogle';
var str2 = 'ggle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false   至少需要一个 o


var pattern = /go?gle/; // ?  匹配 1 个或者 0 个
var str = 'ggle';
var str2 = 'gogle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true


var pattern = /g.?gle/; // ?  匹配 任意字符， 1 个或者 0 个
var str = 'ggle';
var str2 = 'gCgle';
var str3 = 'gCCgle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // false


var pattern = /go{2,4}gle/; // o{2,4}  匹配 o， 最少2个 最多4个， 包含2，4
var str = 'ggle';
var str2 = 'google';
var str3 = 'gooooogle';
alert(pattern.test(str)); // false
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // false


var pattern = /go{3}gle/; // 只匹配3个 o
var str = 'gooogle';
alert(pattern.test(str)); // true


var pattern = /go{3,}gle/; // 匹配3 个或者3 个以上
var str = 'gooooogle';
alert(pattern.test(str)); // true


var pattern = /[a-z]oogle/; // [a-z] 匹配26 个小写字母任意一个
var str = 'google';
var str2 = 'Aoogle'; // 不是小写字母
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false


var pattern = /[0-9]*oogle/; // 匹配数字至少0次
var str = '4412344oogle';
alert(pattern.test(str)); // true  匹配到'4412344oogle'


var pattern = /[0-9]oogle/;
var str = '4444oogle';
alert(pattern.test(str)); // true  因为并没有前导符号，所以可以匹配到 '4oogle'


var pattern = /[a-zA-Z0-9]oogle/; // 匹配a-z, A-Z, 0-9
var str = 'aoogle';
var str2 = 'Boogle';
var str3 = '3oogle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // true


var pattern = /[^A-Z0-9]oogle/; // 表示 非， 匹配除了 A-Z 和 0-9 的所有符号
var str = 'aoogle';
alert(pattern.test(str)); // true


var pattern = /^[0-9]oogle/; // ^ 锚符号表示开始位置
var str = '4oogle';
var str2 = '4444oogle'
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false


var pattern = /google$/; // $ 锚符号表示最后的位置
var str = '123123google';
var str2 = '123123google123';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false


var pattern = /^[0-9]+oogle/; // + 号可以匹配一个或者多个
var str = '4oogle';
var str2 = '4444oogle'
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true


var pattern = /\woogle/; // 相当于 [a-zA-Z0-9_]
var str = '4oogle';
var str2 = '_oogle';
var str3 = 'Google';
var str4 = '!oogle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // true
alert(pattern.test(str4)); // false


var pattern = /\Woogle/; // 相当于 [^a-zA-Z0-9_]
var str = '4oogle';
var str2 = '_oogle';
var str3 = 'Google';
var str4 = '!oogle';
alert(pattern.test(str)); // false
alert(pattern.test(str2)); // false
alert(pattern.test(str3)); // false
alert(pattern.test(str4)); // true


var pattern = /\doogle/; // 相当于 [0-9]
var str = '4oogle';
var str2 = '_oogle';
var str3 = 'Google';
var str4 = '!oogle';
alert(pattern.test(str)); // true
alert(pattern.test(str2)); // false
alert(pattern.test(str3)); // false
alert(pattern.test(str4)); // false


var pattern = /\Doogle/; // 相当于 [^0-9]
var str = '4oogle';
var str2 = '_oogle';
var str3 = 'Google';
var str4 = '!oogle';
alert(pattern.test(str)); // false
alert(pattern.test(str2)); // true
alert(pattern.test(str3)); // true
alert(pattern.test(str4)); // true


var pattern = /google\d+$/;
var str = '123123google123123';
alert(pattern.test(str)); // true


var pattern = /^[a-z]oogle\d$/; // 强制开头结尾
var str = 'aoogle3';
alert(pattern.test(str)); // true
*/


var pattern = /^[a-z]oogle\d$/; // 强制开头结尾
var str = 'aoogle3';
alert(pattern.test(str)); // true



























































