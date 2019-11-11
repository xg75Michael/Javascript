/*





*/


// 用户代理字符串
// 得到用户代理字符串
// IE -- Trident
// Firefox -- Gecko
// Opera -- Presto
// Chrome -- WebKit
// Safari -- WebKit
// Konqueror -- KHTML
document.write(navigator.userAgent);
var client = function() { // 利用立即调用匿名函数来返回创建的对象
	// 引擎
	var engine = {
		ie: false,
		gecko: false,
		webkit: false,
		khtml: false,
		opera: false,
		// 版本
		ver: 0
	};
	// 浏览器
	var browser = {
		ie: false,
		firefox: false,
		chrome: false,
		safari: false,
		opera: false,
		// 浏览器的版本号
		ver: 0,
		// 浏览器通用名称
		name: ''
	};
	// 系统
	var system = {
		win: false,
		mac: false,
		x11: false,
		// 系统名称
		sysname: ''
	};
	// 核心检测程序
	var ua = navigator.userAgent;
	var p = navigator.platform;
	if (p.indexOf('Win') == 0) {
		system.win = true; // 确定是 windows 系统
		system.sysname = 'Windows';
	} else if (p.indexOf('Mac') == 0) {
		system.mac = true; // 确定是 MacIntel 系统
		system.sysname = 'MacIntel';
	} else if (p == 'X11' || p.indexOf('Linux') == 0) {
		system.x11 = true; // 确定是 Linux 系统
		system.sysname = 'Linux';
	}
	if (window.opera) {
		engine.opera = browser.opera = true; // 表示引擎是 opera
		engine.ver = browser.ver = window.opera.version();
		browser.name = 'Opera';
	} else if (/AppleWebKit\/(\S+)/.test(ua)) { // 如果在字符串中找到特定字符则表示这是 Chrome 或者 Safari 浏览器
		engine.webkit = true; // 表示为 webkit 引擎
		engine.ver = RegExp['$1']; // 
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.chrome = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Chrome';
		} else {
			browser.safari = true;
			if (/Version\/(\S+)/.test(ua)) {
				browser.ver = RegExp['$1'];
			}
			browser.name = 'Safari';
		}
	} else if (/rv:([^\)]+)\)\sGecko\/\d{8}/.test(ua)) {
		engine.gecko = true; // 表示引擎为 gecko
		engine.ver = RegExp['$1'];
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.firefox = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Firefox';
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ie = browser.ie = true; // 引擎是 IE
		engine.ver = browser.ver = RegExp['$1'];
		browser.name = 'IE';
	}
	return { // 返回一个对象，包含了具体对象
		engine: engine, // 前面的 engine 是属性，后面的 engine 是对象值
		browser: browser,
		system: system
	}
}();


// alert(client.browser.name + client.browser.ver);
alert(client.system.sysname);
















































