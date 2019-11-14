/*
// thead 标签在一个表格里只能有一个
// tfoot 标签在一个表格里只能有一个
// caption 标签在一个表格里只能有一个
// tbody tr td 和 th 可以有若干个


// 使用 DOM 创建一个表格很麻烦
window.onload = function() {
	var table = document.createElement('table');
	// table.width = 300;
	table.setAttribute('width', 300);
	// 两种添加属性的方法
	table.border = 1;
	var caption = document.createElement('caption');
	table.appendChild(caption);
	// caption.innerHTML = 'Caption created by JS';
	var captionText = document.createTextNode('Caption by JS');
	caption.appendChild(captionText);
	// 创建 thead
	var thead = document.createElement('thead');
	table.appendChild(thead);
	var tr = document.createElement('tr');
	thead.appendChild(tr);
	// 添加第一个表格
	var th = document.createElement('th');
	tr.appendChild(th);
	var thText = document.createTextNode('Data1');
	th.appendChild(thText);
	// 添加第二个表格，重复操作
	var th2 = document.createElement('th');
	tr.appendChild(th2);
	var thText2 = document.createTextNode('Data2');
	th2.appendChild(thText2);

	document.body.appendChild(table);
};


// 使用 DOM 获取表格数据
window.onload = function() {
	var table = document.getElementsByTagName('table')[0];
	// alert(table.children[0].innerHTML); // Members
	// 复杂的表格中就很难判断
	// alert(table.children[2].children[1].children[1].innerHTML); // Female
	// 获取起来很复杂，一眼看不出逻辑
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = tbody.getElementsByTagName('tr')[1];
	var td = tr.getElementsByTagName('td')[1];
	alert(td.innerHTML); // Female
	// 可以看出逻辑，但是更加复杂
};



*/








// HTML DOM 来获取表格
// caption 对 <caption> 的引用
// tBodies 对 <tbody> 的引用
// tFoot 对 <tfoot> 的引用
// tHead 对 <thead> 的引用
// rows 对 <tr> 的引用
window.onload = function() {
	var table = document.getElementsByTagName('table')[0];
	// alert(table.children[0].innerHTML); // Members
	// 复杂的表格中就很难判断
	// alert(table.children[2].children[1].children[1].innerHTML); // Female
	// 获取起来很复杂，一眼看不出逻辑
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = tbody.getElementsByTagName('tr')[1];
	var td = tr.getElementsByTagName('td')[1];
	alert(td.innerHTML); // Female
	// 可以看出逻辑，但是更加复杂
};















































