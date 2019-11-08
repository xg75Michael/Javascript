/*
// BOM 是浏览器实现的对象模型，提供了很多对象，每个浏览器都有自己的标准
// window 对象是最顶层的对象
// window 对象有六大属性，本身也是对象
// document frames history location navigator screen
// document 下有五大属性，分别都是对象


// 系统对话框
alert('Hi'); // 弹出警告框，只有 确定 选项，没有返回值


// 确定和取消
confirm('Please... '); // 此方法根据用户点击确定或者返回来返回一个 布尔值


if (confirm('Click Please.')) {
	alert('You have click on OK');
} else {
	alert('You have click on Cancel.');
}


// 输入提示框
var box = prompt('Please enter a Number', '0');
// 接受两个参数，第一个是说明，第二个是默认值
// 返回用户输入的内容，如果用户点击取消则返回 null
if (box != null) { // 判断用户是否点击了 取消
	alert(box);
}


// 调出打印框
print();
// 调出查找框
find();
// 浏览器底部状态栏，新代的浏览器貌似都取消了
window.defaultStatus = 'Michael';


// 新建窗口，打开窗口
// 接受四个参数
// 第一个是 URL
// 第二个参数是窗口的名字或窗口的目标，目标有 _blank, _parent 等
// 第三个参数是一个字符串，表示新窗口的特性
// 第四个参数表示是否取代浏览器记录中当前加载页面的布尔值


// open('https://www.baidu.com'); // 新建页面并打开百度
// open('https://www.baidu.com', 'baidu'); // 新建页面并打开百度并命名为 baidu
// 命名可以给诶新窗口设置一个名称，以这个名称打开的窗口都在这个窗口里加载 URL
// open('https://www.baidu.com', '_parent'); // 新建页面并打开百度并命名为 baidu


open('https://www.baidu.com', 'baidu', 'width=400,height=400,top=100,left=100');
// 第三个参数是新窗口的属性值设置


// var box = open('https://www.baidu.com', '_parent', 'width=400,height=400,top=100,left=100');
// open 返回新窗口的 window 对象
// alert(box); // [object Window]
// box.alert('This is box window');



*/


// openner
open('opener.html')

















































