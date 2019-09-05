// only argument is an Array with duplicate values
// return all duplicate valuse

// basic solution
function basicNUnique(arr) {
	let len = arr.length;
	let tempArr = [];
	let resultArr = [];
	for (let i=0; i<len; i++) {
		if (tempArr.indexOf(arr[i]) === -1) {
			tempArr.push(arr[i]);
		} else {
			resultArr.push(arr[i]);
		}
	}
	return resultArr;
}

// slice sort for loop
function sortNUnique(arr) {
	var resultArr = [];
	var sortArr = arr.slice().sort();
	for (let i=0; i<sortArr.length-1; i++) {
		if (sortArr[i+1] == sortArr[i]) {
			resultArr.push(sortArr[i]);
		}
	}
	return resultArr;
}

// ES6 reduce arrow function
function reduceArrowNUnique(arr) {
	// count each items in arr to Object
	// doesnot distinguish '1' and 1
	let countObj = arr.reduce((a, b) =>
			({...a, [b]: (a[b] || 0) + 1}), {});
	// get all items which values is more then 1
	let resultArr = Object.keys(countObj).filter((a) => countObj[a] > 1);
	return resultArr;
}

// indexOf lastIndexOf
function indexLastIndexNunique(arr) {
	// [1,2,1] will return [1,1]
	return arr.filter(a => arr.indexOf(a) !== arr.lastIndexOf(a));
}