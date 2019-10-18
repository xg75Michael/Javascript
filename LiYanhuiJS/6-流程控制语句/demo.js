/*
var box = 100; // 单行语句
var age = 30; // 另一条单行语句


// 用花括号包含的语句集合叫做复合语句
// 一对花括号表示一个复合语句， 处理时候可以当作一条单行语句
// 复合语句一般被称为代码块
{
	var height = 200;
	var width = 300;
}


var box = 100;
if (box > 50) {
	alert(box);
}; // if 括号里面返回的结果转成 boolean 是 true的时候 则执行后面的一条语句， 否则不执行


var box = 10;
if (box > 50)
	alert(box);
	alert('no matter true of false, this will be printed'); 
	// 第二条语句和 if 无关， 所以会执行


if (1) { // if 会自动转换括号里的值
	alert('1 是 true');
}


var box = 10;
if (box > 50) {
	alert('more than 50');
} else {
	alert('less than 50');
}


var box = 10;
if (box > 50) {
	alert('more than 50');
} else {
	alert('less than 50');
}


var box = 77;
if (box >= 100) {
	alert('A');
} else if (box >= 90) {
	alert('B');
} else if (box >= 80) {
	alert('C');
} else if (box >= 70) {
	alert('D');
} else {
	alert('Z');
}
// D


var box = 2;
switch (box) {
	case 1: // 相当于 if 中的 (box == 1)
		alert('1');
		break; // 如果没有 break 则穿透继续向下执行
	case 2:
		alert('2');
		break;
	case 3:
		alert('3');
		break;
	default: // 相当于 if 中的 else
		alert('none');
}



*/




var box = 2;
switch (box) {
	case 1: // 相当于 if 中的 (box == 1)
		alert('1');
		break; // 如果没有 break 则穿透继续向下执行
	case 2:
		alert('2');
		break;
	case 3:
		alert('3');
		break;
	default: // 相当于 if 中的 else
		alert('none');
}



















































