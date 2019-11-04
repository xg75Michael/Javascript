/*
// 大小写转换方法
var box = 'Michael';
alert(box.toLowerCase()); // michael
// 全部转换成小些
alert(box.toLocaleLowerCase()); // michael
// 只有几种语言有具有地方特有的大小写
alert(box.toUpperCase()); // MICHAEL
// 全部转换成大写
alert(box.toLocaleUpperCase()); // MICHAEL
// 只有几种语言有具有地方特有的大小写


// 字符串模式匹配方法
var box = 'Michael';
alert(box.match('M')); // M
// 如果找到了就返回查询值 M
alert(box.match(',')); // null
// 如果没有找到返回 null
alert(box.search('M')); // 0
// 如果找到就返回索引 0
alert(box.replace('M', 'F')); // Fichael
// 返回替换后的新字符串，不改变原字符串
alert(box.split('a')); // [Mich,el]
// 返回由 a 分隔成的数组


// 其他方法
alert(String.fromCharCode(76)); // L
// 根据 ascii 码返回字符
var box = 'Michael';
alert(box.localeCompare('Michael')); // 0  表示一样
alert(box.localeCompare('Aichael')); // 1  A 在 M 之前
alert(box.localeCompare('Zichael')); // -1  Z 在 M 之后
alert(box.localeCompare('123')); // 1  123 在 M 之前
alert(box.localeCompare('987')); // 1  987 在 M 之前
// 只适用于字母比较



*/





// HTML 中的方法，不常用
var box = 'Michael';
alert(box.link('http://www.baidu.com')); // <a href="http://www.baidu.com">Michael</a>
// 自动添加一段 HTML 代码，这个是 a tag
alert(box.bold()); // <b>Michael</b>
// 加粗 b tag













































