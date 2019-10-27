/*
var box = ['Michael', 28, 'DaLian', new Date()];
alert(box);
// Michael,28,DaLian,Fri Oct 18 2019 14:23:23 GMT+0800 (CST)
alert(box.toString());
// Michael,28,DaLian,Fri Oct 18 2019 14:23:23 GMT+0800 (CST)
alert(box.valueOf());
// Michael,28,DaLian,Fri Oct 18 2019 14:23:23 GMT+0800 (CST)
alert(box.toLocaleString());
// Michael,28,DaLian,10/18/2019, 2:23:23 PM
// 前三个返回的都一样， 只有最后一个 toLocaleStirng() 会根据不用地方返回不一样的时间


var box = ['Michael', 28, 'DaLian'];
alert(box.join('|')); // Michael|28|DaLian
alert(typeof box.join('|')); // string
alert(box); // Michael,28,DaLian
alert(typeof box); // object  join()方法不会改变原数组
// join() 方法返回按照 | 分隔的字符串


var box = ['Michael', 28];
alert(box.push('DaLian', 'MCS')); // 4  在末尾添加N个元素， 返回数组的长度
alert(box); // Michael,28,DaLian,MCS
alert(box.pop());  // MCS  移除数组最后的元素， 返回被移除的元素
alert(box); // Michael,28,DaLian


var box = ['Michael', 28];
alert(box.push('DaLian')); // 3
alert(box); // Michael,28,DaLian
alert(box.shift()); // Michael  移除数组开头的元素， 返回被移除的元素
alert(box); // 28,DaLian


var box = ['Michael', 28];
alert(box.unshift('DaLian', 'GanJingZi')); // 4  在前面添加N个元素， 返回数组的长度
alert(box); // DaLian,GanJingZi,Michael,28
// unshift() 方法在 IE 浏览器注意返回的值


var box = [1,2,3,4,5];
alert(box.reverse()); // 5,4,3,2,1  方法返回一个逆序的数组
alert(box); // 5,4,3,2,1  原数组被改变了


var box = [5,4,2,1,9,0];
alert(box.sort()); // 0,1,2,4,5,9  方法返回一个正序的数组
alert(box); // 0,1,2,4,5,9  改变原数组


// sort() 排序方法是按照字符串排序的， 所以存在问题
var box = [0, 1, 5, 10, 15];
alert(box.sort()); // 0,1,10,15,5


// 需要写一个函数进行比较， 根据 -1 0 1 来判断哪个数字大
function compare(v1, v2) {
	if (v1 < v2) {
		return -1;
	} else if (v1 = v2) {
		return 0;
	} else {
		return 1;
	}
}
var box = [0, 1, 5, 10, 15];
alert(box.sort(compare)); // 0,1,5,10,15
var box2 = ['0', '1', '5', '10', '15'];
alert(box2.sort(compare)); // 0,1,10,15,5


var box = ['Michael', 28, 'DaLian'];
var box2 = box.concat('MCS'); // 合并box 和 'MCS'
alert(box2); // Michael,28,DaLian,MCS
alert(typeof box2); // object
alert(box); // Michael,28,DaLian  不改变原来数组


// slice() 不改变原来数组
// slice(start[, end]);
var box = ['Michael', 28, 'DaLian'];
var box2 = box.slice(1);
var box3 = box.slice(1, 3); // 从第一个位置取到第三个位置， 包含第一个不包含第三个
var box4 = box.slice(1, 2); // 从第一个位置取到第二个位置， 包含第一个不包含第二个
var box5 = box.slice(); // 简单的直接复制 box 数组
alert(box2); // 28,DaLian
alert(box3); // 28,DaLian
alert(box4); // 28
alert(box5); // Michael,28,DaLian


// splice() 方法改变原数组
// splice(indx[, length, 'item1', 'item2'...])
var box = ['Michael', 28, 'DaLian'];
var box2 = box.splice(0, 2); // 从第0个位置， 取出两个元素 返回被取出的元素
alert(box2); // Michael,28
alert(box); // DaLian


// splice() 的插入功能
var box = ['Michael', 28, 'DaLian'];
var box2 = box.splice(1, 0, 'newItem1', 'newItem2');
// 0 表示不删除任何元素， 在box 中的第一个位置插入两个新元素
alert(box2); // (空)
alert(box); // Michael,newItem1,newItem2,28,DaLian


// splice() 的替换功能
var box = ['Michael', 28, 'DaLian'];
var box2 = box.splice(1, 1, 100); // 删除 28， 替换 100
alert(box2); // 28
alert(box); // Michael,100,DaLian



*/


// 刚想到的昨天面试的题的答案
// 题目是N的长度的数组，里面有0～N-1
// 每隔两个数字删除一个，到末尾就重新从头来
// 比如 [0,1,2,3]
// 第一次删除 2 -> [0,1,3]
// 第二次从3开始数， 3，0，1， 所以删除1 -> [0,3];
// 第三次删除 3, 0, 3 -> [0];
// 结果为 0
var box = [0,1,2,3,4,5,6,7];
var box2 = box.slice();
var index = 2;
for (var i=0; i<box.length - 1; i++) {
	box2.splice(index % box2.length, 1);
	index += 2;
	if (index > box2.length) {
		index -= box2.length;
	}
}
alert(box2); // 4











































