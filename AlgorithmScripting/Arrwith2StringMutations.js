// only have one argument which is an Array
// this array has 2 value, both of them are String
// determined if first String include every word in second String
// case insensitive

// own solution
function mutation(arr) {
	// convert all letters to lower case
	let lowerArr = arr.map(item => item.toLowerCase());
	// do loop to find if any letter in second can not be found in one
	for (let i=0; i<lowerArr[1].length; i++) {
		if (lowerArr[0].search(lowerArr[1][i]) < 0) {
			return false;
		}
	}
	return true;
}

// intermediate solution
function mutationInter(arr) {
	return arr[1].toLowerCase()
			.split("")
			.every(letter => {
				return arr[0].toLowerCase().indexOf(letter) != -1;
			});
}


