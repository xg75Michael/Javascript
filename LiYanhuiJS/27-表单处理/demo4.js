/*
// 表单的过滤输入
// 1. 禁止或屏蔽非数字键的输入，阻止非数字键的默认行为
// 2. 验证后取消，可以先输入非法字符，然后判断后取消刚输入的文本
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];

	// 屏蔽非数字键的输入
	addEvent(content, 'keypress', function(evt) {
		var e = evt || window.event;
		// 在 basic.js 中添加了跨浏览器获取字符编码 函数
		var charCode = getCharCode(evt);
		// console.log(charCode);
		// console.log(String.fromCharCode(charCode)); // 转回字符串
		// 正则表达式来获取文本是否为数字
		if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 8) {
			preDef(evt); // 屏蔽掉非数字功能的输入
			// Firefox 旧版本浏览器中 删除，回车等键也被屏蔽了
			// 所以添加了 && 后面的兼容部分
			// Safari 中组合键，比如 command + a ，也被屏蔽
			// 但是可以输入中文.. 无效
		}
	});
});


// 剪贴板相关的六个事件
// copy cut paste beforecopy beforecut beforepaste
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];

	addEvent(content, 'copy', function(evt) {
		console.log('copying');
	});
	addEvent(content, 'cut', function(evt) {
		console.log('cut');
	});
	addEvent(content, 'paste', function(evt) {
		console.log('paste');
	});
	addEvent(content, 'beforecopy', function(evt) {
		console.log('beforecopy');
	});
	addEvent(content, 'beforecut', function(evt) {
		console.log('beforecut');
	});
	addEvent(content, 'beforepaste', function(evt) {
		console.log('beforepaste');
	});
});


// 阻止默认的复制粘贴剪贴，鼠标的复制也被阻止
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];

	addEvent(content, 'copy', function(evt) {
		preDef(evt);
	});
	addEvent(content, 'cut', function(evt) {
		preDef(evt);
	});
	addEvent(content, 'paste', function(evt) {
		preDef(evt);
	});
});


addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	addEvent(content, 'keypress', function(evt) {
		var e = evt || window.event;
		// 在 basic.js 中添加了跨浏览器获取字符编码 函数
		var charCode = getCharCode(evt);
		// console.log(charCode);
		// console.log(String.fromCharCode(charCode)); // 转回字符串
		// 正则表达式来获取文本是否为数字
		if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 8) {
			preDef(evt); // 屏蔽掉非数字功能的输入
			// Firefox 旧版本浏览器中 删除，回车等键也被屏蔽了
			// 所以添加了 && 后面的兼容部分
			// Safari 中组合键，比如 command + a ，也被屏蔽
			// 但是可以输入中文.. 无效
			// 在 textarea 元素中有一个 ime-mode 属性来控制输入法
			// Safari 和 Chrome 却无效，依然可以使用输入法
			// content.style.imeMode = 'disabled';
		}
	});
	addEvent(content, 'copy', function(evt) {
		preDef(evt);
	});
	addEvent(content, 'cut', function(evt) {
		preDef(evt);
	});
	addEvent(content, 'paste', function(evt) {
		preDef(evt);
	});
});
// 屏蔽的办法并不完全，用户体验不好，甚至会认为网页有问题
// 相比较验证后取消会更好一点


// 验证后取消的方式来屏蔽
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	// 验证数据非法后取消输入
	addEvent(content, 'keyup', function(evt) {
		this.value = this.value.replace(/[^\d]/g, '');
		// 将非数字转换成空 ''
		// 兼容性很好并用户体验优良
	});
});



*/


addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];

	addEvent(fm.elements['a1'], 'keyup', tabForWard);
	addEvent(fm.elements['a2'], 'keyup', tabForWard);
	addEvent(fm.elements['a3'], 'keyup', tabForWard);
	function tabForWard(evt) {
		var e = evt || window.event;
		// var target = getTarget(evt); // 也可以用 target
		// 判断当前的长度是否和输入的长度是否一致
		if (this.value.length == this.maxLength) {
			// 遍历所有控件
			for (var i = 0; i < fm.elements.length; i++) {
				if (fm.elements[i] == this) {
					// 找到自己然后
					fm.elements[i+1].focus();
					return;
				}
			}
		}
	}
});
















































