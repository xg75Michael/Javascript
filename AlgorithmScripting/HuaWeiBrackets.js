function HuaWei(string){
	var len = string.length;
	var tempArr = []; // 临时的一个数组来存储
	tempArr.push(string[0]);
	for(let i=1; i<len; i++) {
		if (matching(tempArr[tempArr.length-1], string[i])) {
			// 判断数组中最后一个和字符串下一个是否配对
			tempArr.pop(); // 如果配对则删除最后一个
		} else {
			tempArr.push(string[i]);
			// 应当直接返回 false
		}
	}
	if (tempArr == null) {
		return true;
	} else {
		return false;
	}
}
// 简单的函数来判断两者是否配对
function matching(pre, next) {
	if (pre === '(') {
		if (next === ')') {
			return true;
		}
	}
	if (pre === '[') {
		if (next === ']') {
			return true;
		}
	}
	if (pre === '{') {
		if (next === '}') {
			return true;
		}
	}
}
console.log(HuaWei('()'));