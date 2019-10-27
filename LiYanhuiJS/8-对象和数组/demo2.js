/*
var box = new Array();
alert(box); // (空的)
alert(typeof box); // object 数组属于对象类型


var box = new Array('Michael', 28, 'DaLian'); // 创建数组并分配三个元素
alert(box); // Michael, 28, DaLian
alert(box[0]); // Michael
alert(box[1]); // 28


var box = new Array(10); // 创建数组， 包含10个空元素， 必须是数字， 只能是1个数字
var box2 = new Array(10, 2); // 如果是多个数字则创建多个元素的数组
alert(box); // ,,,,,,,,,
alert(box2); // 10,2
box[2] = 'Michael'; // 可以赋值
box[4] = 'Gao';
alert(box); // ,,Michael,,Gao,,,,,


var box = Array(); // 可以省略 new 关键字 但是不推荐
alert(typeof box); // object


var box = []; // 字面量的方式创建数组
alert(typeof box); // object


var box = ['Michael', 28, 'DaLian']; // 字面量的方式创建数组并赋值
alert(box); // Michael,28,DaLian


var box = [1,2,]; // 浏览器不同效果不同， IE会返回长度为 3
alert(box.length); // 2


var box = [,,,]; // 需要考虑浏览器兼容问题
alert(box.length); // 3


var box = ['Michael', 28, 'DaLian'];
box[1] = 100; // 修改第二个元素
box[4] = 'MCS'; // 增加第五个元素
alert(box); // Michael,100,DaLian,,MCS
// 第四个元素是空的


var box = [];
box['name'] = 'Michael';
box['age'] = 28;
alert(box); // (空)
alert(box.name); // Michael
alert(box['name']); // Michael
// 字符串下标直接打印是不可以的， 只能当成属性或者用中括号来输出


var box = [];
box[0] = 'Michael';
box[1] = 28;
alert(box); // Michael,28
// 只有数字下标才可以直接打印， 即索引下标


var box = [];
box['0'] = 'Michael';
box['1'] = 28;
box['4'] = 'something';
alert(box); // Michael,28,,,something
// 数字字符串也可以直接打印


var box = ['Michael', 28, 'DaLian'];
box.length = 10; // 强制把 box 数组的长度 改为 10
alert(box.length); // 10
alert(box); // Michael,28,DaLian,,,,,,,
// 多出的部分都用 , 号填充， 也就是都是空的


var box = ['Michael', 28, 'DaLian'];
box[3] = 'GanJingZi'; // 添加一个新元素
alert(box); // Michael,28,DaLian,GanJingZi


var box = ['Michael', 28, 'DaLian'];
box[5] = 'GanJingZi';
alert(box); // Michael,28,DaLian,,,GanJingZi
// 中间用 , 号补充


var box = ['Michael', 28, 'DaLian'];
box[box.length] = 'newItem'; // 使用 .length 获得最后一个下标值
box[box.length] = 'newItem';
box[box.length] = 'newItem';
alert(box); // Michael,28,DaLian,newItem,newItem,newItem



*/



var box = [
	{
		name: 'Michael',
		age: 28
	},
	[1, 2, 3, 'aString', new Object()],
	'anotherString',
	25+25,
	new Array(1,2,3)
];
alert(box);
// [object Object],1,2,3,aString,[object Object],anotherString,50,1,2,3
alert(box[0].name); // Michael
alert(box[0]['name']); // Michael

















































