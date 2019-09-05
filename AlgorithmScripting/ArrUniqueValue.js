// remove all duplicate values
// return unique values in a Array

// basic solution
function basicUnique(arr) {
	var resultArr = [];
	for (let i=0; i<arr.length; i++) {
		if (resultArr.indexOf(arr[i]) === -1 && arr[i] !== '') {
			resultArr.push(arr[i]);
		}
	}
	return resultArr;
}

// loop for in obj
function forinUnique(arr) {
	let i,
		len = arr.length,
		resultArr = [],
		tempObj = {};
	for (i=0; i<len; i++) {
		// sign all object items to 0
		// since this is Object, it doesnot distinguish '1' and 1
		tempObj[arr[i]] = 0;
	}
	for (i in tempObj) {
		resultArr.push(i);
	}
	return resultArr;
}

// JS 1.6/ ECMAScript 5
function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

// filter hasOwnProperty hashkey
// case hashkey only be string, so it doesnot distinguish '1' and 1
function hopUnique(arr) {
	var tempObj = {};
	return arr.filter(function(item) {
		return tempObj.hasOwnProperty(item) ? false : (tempObj[item]) = true;
	})
}

// JS/ ES6
var myArray = ['a', 1, 2, 'a', 1, 'a', 'b'];
var myUnique = myArray.filter((v, i, s) => s.indexOf(v) === i);

// ES6/ Set ...
var mySetArray = ['a', 1, 2, 'a', 1, 'a', 'b'];
// use ...operator to convert Object to Array
let setUnique = [...new Set(mySetArray)];