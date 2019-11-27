/*
// 早期的时候表单处理都是在服务器端处理的，但是这样会对服务器添加很多的压力


// 几种获取 form 的方法
addEvent(window, 'load', function() {
	// var fm = document.getElementById('myForm');
	// var fm = document.getElementsByTagName('form')[0];
	// var fm = document.forms[0];
	var fm = document.forms['yourForm'];
	// var fm = document.yourForm; // 不建议，多个 name 一样的会变成数组
	alert(fm); // [object HTMLFormElement]
});


// submit 触发的一些问题
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	// 阻止提交
	// fm.onsubmit = function() {}; // 传统方法
	// 利用 basic.js 中的浏览器兼容方法
	// var sub = document.getElementById('sub');
	// addEvent(sub, 'submit', function(evt) {
	// 	preDef(evt); // 未阻止，提交出去了
	// });
	// addEvent(sub, 'click', function(evt) {
	// 	preDef(evt);
	// });
	// sub 是按钮，可以阻止 click 事件
	// 把 submit 事件注册到 input 中的 submit 按钮是无法触发 submit 事件的
	// 必须把 submit 事件绑定到 form 对象才可以触发 submit 事件
	// 只不过触发 submit 事件的流程是点击 input 中的 submit 按钮而已
	addEvent(fm, 'submit', function(evt) {
		preDef(evt);
	});
});


addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	// 阻止提交
	addEvent(fm, 'submit', function(evt) {
		preDef(evt);
	});
	var button = document.getElementById('button');
	// 在别的元素上绑定提交功能
	addEvent(button, 'click', function() {
		fm.submit(); // 需要是 form.submit() 方法
		// 调用此方法可以让任何元素提交表单
	});
	var strong = document.getElementById('strong');
	addEvent(strong, 'click', function() {
		fm.submit(); // 任何元素都可以
	});
});


// ctrl + enter 实现提交
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	addEvent(fm, 'submit', function(evt) {
		preDef(evt);
	});
	addEvent(document, 'keydown', function(evt) {
		var e = evt || window.event;
		if (e.ctrlKey && e.keyCode == 13) {
			// ctrl + enter
			fm.submit();
		}
	});
});
*/




// ctrl + enter 实现提交
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	addEvent(fm, 'submit', function(evt) {
		preDef(evt);
	});
	addEvent(document, 'keydown', function(evt) {
		var e = evt || window.event;
		if (e.ctrlKey && e.keyCode == 13) {
			// ctrl + enter
			fm.submit();
		}
	});
});
// 表单中尽量避免 id 和 name 是 submit
// 因为可能会和 form.submit() 方法冲突导致无法提交
















































