/*
// 第一个 cookie 的局限性
// 每个域名都有最多的个数，一般为20个或者50个，虽然 Safari 和 Chrome 没有硬性限制
// 但是兼容性考虑来说，以最低20个为界限，而且每个历览器清理 cookie 的时候行为不同
// 第二个 cookie 的局限性
// cookie 的大小一般小于 4k 也就是4096字节，考虑兼容问题不能超过4095字节
// 第三个 cookie 的局限性
// cookie 毕竟保存在客户端以文本形式，虽然有加密但是并不安全
// 一般敏感的信息，如银行卡号，用户密码等都不保存在 cookie 中


// 其他存储
// IE 中提供了一个 userData ，从5.0开始，每个数据最多 128K ，每个域名最多 1M
// 使用此语法来存储数据： style="behavior:url(#default#userData)"
// 配合元素设置 box.setAttribute('name', 'value'); 来设置 cookie 然后 .save('name') 来保存
// 在不设置时间的时候就是永久存在，使用 box.expires = setCookieDate(7);
// function setCookieDate(day) {
// 	var date = new Date();
// 	if (typeof day == 'number' && day > 0) {
// 		date.setDate(date.getDate() + day);
// 	} else {
// 		throw new Error('Wrong argument, need to be number and bigger then 0.');
// 	}
// 	return date.toGMTString(); // 需要转换成字符串才能设置 box.expires
// }
// 另一种删除方法就是直接删除 IE 的 cookie ，也就是手动删除
// 使用 box.removeAttribute('name');


// Web 存储
// JavaScript 提供了 sessionStorage 和 globalStorage
// HTML5 提供了 localStorage 来取代 globalStorage
addEvent(window, 'load', function() {
	sessionStorage.setItem('name', 'Michael');
	sessionStorage.removeItem('name'); // 调用 removeItem() 方法来删除
	console.log(sessionStorage.getItem('name')); // Michael
	// 关闭浏览器 sessionStorage 就会清空
	// 或者手动点击浏览器清空缓存按钮
});


// 也可以使用 .name = 的方法设置，也就是对象的模式
addEvent(window, 'load', function() {
	sessionStorage.bbb = 'aaa';
	// sessionStorage.removeItem('bbb'); // 删除 bbb
	console.log(sessionStorage.getItem('bbb')); // aaa
});


// localStorage 的用法和获取和 sessionStorage 一样
addEvent(window, 'load', function() {
	// localStorage.sth = 'hhh';
	// localStorage.removeItem('sth');
	console.log(localStorage.sth); // hhh
});
// localStorage 即使关闭了浏览器依然存在
// 通常最大容量大小为 2.5M 或 5M
*/


addEvent(window, 'load', function() {
	// sessionStorage.bbb = 'aaa';
	// sessionStorage.removeItem('bbb'); // 删除 bbb
	console.log(sessionStorage.getItem('bbb')); // aaa
});















































