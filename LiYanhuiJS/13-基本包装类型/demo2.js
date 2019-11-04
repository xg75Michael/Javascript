/*
// String 类型
// 主要有三个属性 length, constructor,  
var box = 'Michael';
alert(box.length); // 7
// 返回字符串的长度
alert(box.constructor); // 返回创建 String 对象的函数
alert(box.prototype); // undefined
// 原型



// String 包含的通用方法 valueOf(), toString(), toLocaleString() 都返回一样的值
// charAt() 返回索引位置的字符
var box = 'Michael';
alert(box.charAt(2)); // c
alert(box[2]); // c
// 数组的方式和 charAt() 效果一样，注意 IE 浏览器问题
// charCodeAt() 返回索引字符的 Unicode 编码
alert(box.charCodeAt(2)); // 99  返回的是 c 的 acssii 编码


// 字符串操作方法
var box = 'Michael';
// alert(box.concat(' is ', 'a man!')); // Michael is a man.
// // 可以传递任何数量的参数
// alert(box.slice(1,4)); // ich
// // 返回区间内的字符串，不包含后面的 4 中的 a
// alert(box.substring(1,4)); // ich
// // 同上，注意参数为负的时候表现不同
// alert(box.substr(1,4)); // icha
// // 参数不同，(开始位置， 长度)
// // 只传一个参数的时候表现相同
// alert(box.slice(3)); // hael
// alert(box.substring(3)); // hael
// alert(box.substr(3)); // hael
// 当参数为负数的时候表现各不相同
// alert(box.slice(-2)); // el
// // 其实相当于 box.slice(7 + (-2))
// alert(box.substring(-2)); // Michael
// // substring 负数直接返回全部
// alert(box.substr(-2)); // el
// // 相当于 box.substr(7 + (-2)) ，要注意 IE 浏览器全部返回问题
alert(box.slice(2, -1)); // chae
// 相当于 box.slice(2, 7-1)
alert(box.substring(2, -1)); // Mi
// substring 第二个参数如果是负直接转换成0并调换 (0, 2) 前面的一定比后面小
alert(box.substr(2, -1)); // ''
// substr 第二个参数是负数返回0 就是长度为0 ''



*/






// 字符串位置方法
var box = 'Michaelii';
// alert(box.indexOf('i')); // 1
// // 返回从头开始查找的第一个 i 的索引
// alert(box.indexOf('i', 2)); // 7
// // 从索引 2 开始查找第一个 i 的索引
// alert(box.lastIndexOf('i')); // 8
// // 返回从后面查找的第一个 i 的索引
// alert(box.lastIndexOf('i', 7)); // 7
// // 从索引 8 位置向前查找第一个 i 的索引
// alert(box.indexOf(',')); // -1
// // 找不到时返回 -1

// 下面代码返回一个数组包含字符串中所有 i 的索引
var boxArr = [];
var pos = box.indexOf('i');
while (pos > -1) {
	boxArr.push(pos);
	pos = box.indexOf('i', pos+1);
}
alert(boxArr); // [1,7,8]








































