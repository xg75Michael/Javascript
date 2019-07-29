/*
	客户端检测
	-能力检测
	-用户代理检测的历史
	-选择检测方法
*/
// IE5.0 之前没有 getElementById() 这个方法，即可以用能力检测
function getElement(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	} else if (document.all) {
		return document.all[id];
	} else {
		throw new Error("No way to retrieve element!");
	}
}
// 先检测常用通用方法

// 与其检测这个方法是否存在， 不如检测sort 是不是函数
function isSortable(obj) {
	return typeof obj.sort == "function";
}
// IE8
function hasCreateElement() {
	return typeof document.createElement == "function"; // false
}
// IE9 修复了此问题

// 怪癖检测 quirks detection 例子
// IE8之前有个 bug ，当实例属性和[[DontEnum]] 属性同名，不会出现在 for-in 中
var hasDontEnumQuirk = function() {
	var o = {toString: function() {}};
	for (var prop in o) {
		if (prop == "toString") {
			return false;
		}
	}
	return true;
}(); // 正常ECMA Script 会返回 toString

// 用户代理检测
// 各种东西检测的方法很复杂...
// 检测浏览器，版本号，引擎，平台设备系统等等
var client = function() {
	// 呈现引擎
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		// 完整版本号
		ver: null
	};
	// 浏览器
	var browser = {
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		// 具体版本号
		ver: null
	};
	// 平台设备操作系统
	var system = {
		win: false,
		mac: false,
		x11: false,
		// 移动设备
		iphone: false,
		ipod: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		// 游戏系统
		wii: false,
		ps: false
	};
	// 检测呈现引擎和浏览器
	var ua = navigator.userAgent;
	if (window.opera) {
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);

		// 确定是 Chrome 还是 Safari
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		} else {
			// 近似的确定版本好
			var safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}

			browser.safari = browser.ver = safariVersion;
/*
.
.
.
*/
		}
	}
}



