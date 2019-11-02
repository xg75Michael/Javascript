/* 
*  2019/06/10
*  
*/
// create a new OBJ for testing purpose
var objOrign = {
  	name: "Michael",
  	age: [28,29],
  	hobbies: ["dance","sing","play"],
  	skills: {
    	living: {
      	cock: "burger",
      	house: "cleaning"
    	},
    	study: "javascript"
  	}
}

// simple clone
function simpleClone(oldObj, newObj) {
  	var i;
  	// in case of no newObj parameter
  	newObj = newObj || {};
  	for (i in oldObj) {
    	if (oldObj.hasOwnProperty(i)) {
      		newObj[i] = oldObj[i];
    	}
  	}
  	return newObj;
}
var newSimpleObj = simpleClone(objOrign);
console.log(newSimpleObj.age);
console.log(objOrign.age);
newSimpleObj.age.push(30);
// both new and old one are changed
console.log(newSimpleObj.age);
console.log(objOrign.age);

// deep clone
function deepClone(oldObj, newObj) {
	newObj = newObj || {};
	for (var i in oldObj) {
		if (oldObj.hasOwnProperty(i)) {
			if (typeof oldObj[i] === "object") {
				newObj[i] = (Object.prototype.toString.call(oldObj[i]) === "[object Array]")? [] : {};
				deepClone(oldObj[i], newObj[i]);
			} else {
				newObj[i] = oldObj[i];
			}
		}
	}
	return newObj;
}
var deepChildObj = deepClone(objOrign);
deepChildObj.hobbies.push("newHobby");
// only deeChildObj has "newHobby"
console.log(objOrign.hobbies);
console.log(deepChildObj.hobbies);

// using JSON.stringify and JSON.parse deep clone
function deepCloneJSON(oldObj, newObj) {
	var i, copystr;
	copystr = JSON.stringify(oldObj);
	copystr = JSON.parse(copystr);
	newObj = newObj || {};
	for (i in copystr) {
		if(copystr.hasOwnProperty(i)) {
			newObj[i] = copystr[i];
		}
	}
	copystr = null;
	return newObj;
}
var newJSONObj = deepCloneJSON(objOrign);
newJSONObj.name = "Gao";
console.log(objOrign.name);
console.log(newJSONObj.name);
























