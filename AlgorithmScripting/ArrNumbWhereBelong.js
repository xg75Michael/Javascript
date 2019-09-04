// first argument is a arr with different number
// second argument is a number
// Find the place where the Numb belong

function getIndexBasic(arr, num) {
	// for loop times
	let times = arr.length;
	// for loop count
	let count = 0;
	for (let i=0; i<times; i++) {
		if (num>arr[i]) {
			count++;
		}
	}
	return count;
}

// sort() filter()
function getIndexToIns(arr, num) {
	// sort the arr
	arr.sort((a,b) => a-b);
	// filter all items which is less then num
	let newArr = arr.filter(item => item < num);
	return newArr.length;
}

// push() sort()
function getIndexInter(arr, num) {
	// push the num to the arr
	arr.push(num);
	arr.sort((a,b) => a-b);
	// return the index of num
	return arr.indexOf(num);
}

// concat() sort() indexOf()
function getIndexAdv(arr, num) {
	return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

