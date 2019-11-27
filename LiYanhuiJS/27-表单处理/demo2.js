/*
// 用户反复提交表单问题
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var flag = false;
	// 阻止提交
	addEvent(fm, 'submit', function(evt) {
		preDef(evt);
		// 模拟延迟
		// alert('submit');
		// 第一种方法
		// document.getElementById('sub').disabled = true;
		// // 第一次提交后将按钮禁用，只限于通过按钮来提交的情况

		// 第二种方法阻止重复提交
		if (flag == true) {
			return;
		}
		flag = true; // 表示提交过一次了
		alert('submit');

		setTimeout(function() {
			fm.submit();
		}, 5000);
	});
});


// reset() 重置方法很危险，已经很少有人用了
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	// reset 方法和事件
	addEvent(document, 'click', function() {
		fm.reset();
		// 点击任意处重置表单
	});
	addEvent(fm, 'reset', function() {
		alert('reset event');
	});
});


// 获取表单控件的方法
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	// 表单控件就是 form 里面的 input submit textarea select 等，就是表单元素标签
	// alert(fm.elements); // [object HTMLFormControlsCollection]
	// 表单控件的集合
	// alert(fm.length); // 3  向下兼容，表单控件的长度，不推荐
	// alert(fm.elements.length); // 3
	// alert(fm[0]); // 向下兼容，不推荐
	// alert(fm.elements[0]); // [object HTMLInputElement]
	alert(fm.elements['user']); // [object HTMLInputElement]
	// 通过表单集合获取第一个元素，非表单控件会被忽略掉
});


// 共有属性和方法
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var sexList = fm.elements['sex'];
	var user = fm.elements['user'];
	// alert(sexList); // [object RadioNodeList]
	// alert(sexList[0].value); // man
	// alert(sexList[0].name); // sex
	// sexList[0].disabled = true; // 设置 disabled
	// alert(sexList[0].form); // [object HTMLFormElement]
	// 得到从属的 form 对象
	// alert(sexList[0].type); // radio
	// sexList[0].type = 'checkbox'; // 修改 type 属性
	// 不推荐使用 type 属性来修改属性
	// alert(fm.elements['sub'].type); // submit
	// user.focus(); // 将焦点移入
	// user.blur(); // 将焦点移出
});



*/



// 事件
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var sexList = fm.elements['sex'];
	var user = fm.elements['user'];
	// 传统模式 onfocus
	addEvent(user, 'focus', function() {
		console.log('focus: ' + user.value);
	});
	addEvent(user, 'blur', function() {
		console.log('blur: ' + user.value);
	});
	addEvent(user, 'change', function() {
		console.log('change: ' + user.value);
	});
	// 不难看出三者有一定的顺序
	// focus > change > blur
});
















































