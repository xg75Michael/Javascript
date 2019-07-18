/*
	BOM
	-window property
	-operation
	-locaiton
	-navigator, web browser
*/

// window 是JavaScript 访问浏览器窗口的一个借口
// 同时它也是Global 对象， 全局所有的变量和函数都是它的属性和方法
var age = 29;
function sayAge() {
	alert(this.age);
}
alert(window.age); // 29
sayAge(); // 29
window.sayAge(); // 29

// 全局变量不能通过delete 删除， 在window 上定义的属性可以
var age = 29;
window.color = "red1";
delete window.age; // false (IE < 9 时抛出错误)
delete window.color; // true (IE < 9 时抛出错误)
alert(window.age); // 29
alert(window.color); // undefined
// 原因是因为var 创建的属性有[[Configurable]] 被设置为false

// oldValue 未定义 所以错误
var newValue = oldValue; // error
// 因为是属性查询， 所以不会错误
var newValue = window.oldValue; // undefined 

// 窗口和框架
// window.frames[0] 和window.frames["someFrameName"] 是一样的
// top.frames[0] 更加推荐， 因为top 永远表示最高层框架
// parent 指的是上一层框架， 可以等于top
// self 对象是和window 一样的， 可以互换， 只是为了对应top parent

// 窗口位置
// IE Safari Opera Chrome 都提供了 screenLeft 和 screenTop 属性
// Firefox Safari Chrome 都提供了 sreenX 和 screenY 属性
// Opera 提供了 screenX 和 screenY 但是不等同 screenLeft 和screenTop 属性
var leftPos = (typeof window.screenLeft == "number")?
				window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number")?
				window.screenTop : window.screenY;
// 将窗口移动到左上角 可能会被禁用
window.moveTo(0, 0);
// 将窗口向下移动100像素
window.moveBy(0, 100);
// 将窗口移动到(200, 300)
window.moveTo(200, 300);
// 将窗口向左移动50像素
window.moveBy(-50, 0);

// 窗口大小（可见窗口大小）
// innerWidth, innerHeight, outerWidth, outerHeight
// 在IE9+ Firefox Safari Opera 和 Chrome 中都有提供， 但是计算方法略有不同
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
// 检测是否是数值
if (typeof pageWidth != "number") {
	// 检测是否是标准模式
	if (document.compatMode == "CSS1Compat") {
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageWidth = document.body.clientHeight;
	}
}
// resizeTo(), resizeBy() 可能会被禁用
window.resizeTo(100, 100);
window.resizeBy(100, 50);
window.resizeTo(300, 300);

// window.open() 方法接受4个参数， URL， 窗口目标， 特性字符串，是否新页面
// 通常只传入第一个URL参数
// 和点击a tage 效果是一样的 <a href="http://www.baidu.com" target="someFrame"></a>
window.open("http://www.baidu.com", "someFrame");
// 第三个参数
// fullscreen, height, left, location, menubar, resizable...
window.open("http://www.baidu.com/", "wroxWindow", 
	"height=400, width=400, top=10, left=10, resizable=yes");
// 打开一个新窗口wroxWindow 窗口400*400像素，可调节窗口大小， 距屏幕左上10*10像素

// 间歇调用和超时调用
// 每一秒都显示一个警告框，不贵贱字符串写函数
setTimeout(function() {
	alert("Hi world!");
}, 1000);

var timeoutId = setTimeout(function() {
	alert("hi clear");
}, 1000);
// 取消
clearTimeout(timeoutId);
// 同样不推荐字符串的模式
setInteral(function() {
	alert("Hi setInteral");
}, 1000);
// 没半秒递增一次
var num = 0;
var maxNum = 10;
function incrementNumb() {
	num++;
	if (num<maxNum) {
		setTimeout(incrementNumb, 500);
	} else {
		alert("Done");
	}
}
setTimeout(incrementNumb, 500);

// 系统对话框
// 其中 alert() confirm() prompt()
// confirm 点击确认即表示 true
if (confirm("Are you sure?")) {
	alert("I'm glad you are sure");
} else {
	alert("I'm sorry to hear that");
}

var resultPrompt = prompt("What is your name?", "");
if (resultPrompt !== null) {
	alert("Welcome, " + resultPrompt);
}
// 显示 打印 对话框
window.print();
// 显示 查找 对话框
window.find();

// location 对象
// window.location == document.location
// hash, host, hostname, href, pathname, prot, protocol, search
/*
.
.
.
.
.
.
history.go(1);
history.go(-1);
history.back();
history.forward();
.
.
.

*/



