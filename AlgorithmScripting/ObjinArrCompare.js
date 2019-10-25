// if there are 2 objects in a array
// how to sort this array based on objects' property?

function compareObjectsInArr(prop) {
	return function compareProp(prev,curt) {
		var value1 = prev[prop];
		var value2 = curt[prop];
		if (value1 > value2) {
			return 1;
		} else if (value2 > value1) {
			return -1;
		} else {
			return 0;
		}
	}
}

// testing
var someArr = [{name: 'Michael', age: 20}, {name: 'Gao', age:30}];
someArr.sort(compareObjectsInArr('name'));
// [{name: 'Gao', age:30}, {name: 'Michael', age: 20}]
// cause 'Gao' < 'Michael'
someArr.sort(compareObjectsInArr('age'));
// [{name: 'Michael', age: 20}, {name: 'Gao', age:30}]
// cause 20 < 30