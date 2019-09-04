// first argument is an Array with only one dimensional
// seconde argument is a Number to chunk the array into this size
// need to return two-dimensional array

// own solution
function chunkArray(arr, size) {
	// get a copy of arr
	var newArr = arr.slice();
	var resultArr = [];
	// to store array chunk
	var tempArr = [];
	for (let i=0; i<arr.length/size; i++) {
		tempArr = newArr.splice(0, size);
		resultArr.push(tempArr);
	}
	return resultArr;
}

// intermediate push() slice()
function chunkArrayInter(arr, size) {
	var newArr = [];
	// i+=size is really good way
	for (let i=0; i<arr.length; i+=size) {
		newArr.push(arr.slice(i, i+size));
	}
	return newArr;
}

// advanced recursion function
function chukArrayRecusion(arr, size) {
	if (arr.length <= size) {
		return [arr];
	} else {
		return [arr.slice(0,size)].concat(chukArrayRecusion(arr.slice(size), size));
	}
}
