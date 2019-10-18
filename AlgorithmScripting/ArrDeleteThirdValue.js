/*
笔试题之一
一个数组长度是 N， 从 0～N-1；
比如长度是8， 数组则是 arr = [0,1,2,3,4,5,6,7];
每次删除第三个元素，删除之后再删除之后的第三个元素，直到剩最后一个元素；
arr 删除第一次是删掉了2之后的 [0,1,3,4,5,6,7];
之后再删除5是 [0,1,3,4,6,7];
遇到末端的时候从前端继续， 之后再删除0是 [1,3,4,6,7];

*/
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
// 貌似还有点计算的问题
// 大概思路应该没问题