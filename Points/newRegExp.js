/* 2 way to create RegExp
* var expression = / pattern / flags;
* or	var expression = new RegExp("pattern", "flags");
* /g -- try to match all string
* /i -- only match the first one, case insensitive
* /m -- multiline mode
*/

// match all "at"
var expressionBasic1 = /at/g;
// same result
var patternBasic1 = new RegExp("at", "g");
// new RegExp need to pass two string as parameters

// match bat or cat, case insensitive
var expressionBasic2 = /[bc]at/i;
// match [bc]at, case insensitive
var expressionBasic3 = /\[bc\]/i;
// ( [ { \ ^ $ | } ? * + . ] )	all these sign need to come with \ to transferring

// example
var re = null, i;
for (i = 0; i < 10; i++) {
	re = /cat/g;
	console.log(re.test("catastrophe"));
}
for (i = 0; i < 10; i++) {
	re = new RegExp("cat", "g");
	console.log(re.test("catastrophe"));
}

/* RegExp has five attributes:
*  global: boolean, if it has "g"?
*  ignoreCase: boolean, if it has "i"?
*  lastIndex: integer, searching from 0
*  multiline: boolean, if it has "m"?
*  source: return literal expression 
*/

// attributes examples
var patternAttr1 = /\[bc\]at/i;
console.log(patternAttr1.global);		//false
console.log(patternAttr1.ignoreCase);	//true
console.log(patternAttr1.multiline);	//false
console.log(patternAttr1.lastIndex);	//0
console.log(patternAttr1.source);		//"\[bc\]at"
// same reslut using RegExp
var patternAttr2 = new RegExp("\\[bc\\]at", "i");
console.log(patternAttr2.global);		//false
console.log(patternAttr2.ignoreCase);	//true
console.log(patternAttr2.multiline);	//false
console.log(patternAttr2.lastIndex);	//0
console.log(patternAttr2.source);		//"\[bc\]at"

// .test() will return true if found, false if not found.
var patternTest = new RegExp("e");
console.log(patternTest.test("Here will return a true!"));
var textTest = "111-22-3333";
var textTestpattern = /\d{3}-\d{2}-\d{4}/;
if (textTestpattern.test(textTest)) {
	console.log(".test() returns ture!");
}

// .compile() can change RegExp
var patternCompile = new RegExp("e");
console.log(patternCompile.test("This will return true!"));
// change "e" to "d"
patternCompile.compile("d");
// there is no "d", so return false
console.log(patternCompile.test("This will return false!"));

// examples for .exec(), will return an array if found.
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);

// to LocaleString(), toString()
var patternString = new RegExp("\\[bc\\]at", "gi");
console.log(patternString.toString());			// will return /\[bc]at/gi
console.log(patternString.toLocaleString());	// same return /\[bc]at/gi

// RegExp has arrts: input, lastMatch, lastParen, leftContext, multiline, rightContext
var textAttrs = "this is a short summer";
var patternAttrs = /(.)hor(.)/g;
if (patternAttrs.test(textAttrs)) {
	// input returns original string
	console.log(RegExp.input);			// this is a short summer
	console.log(RegExp.$_);
	// leftContext returns left context
	console.log(RegExp.leftContext);	// this is a
	console.log(RegExp["$`"]);
	// rightContext returns right context
	console.log(RegExp.rightContext);	// summer
	console.log(RegExp["$'"]);
	// lastMatch returns last match string
	console.log(RegExp.lastMatch);		// short
	console.log(RegExp["$&"]);
	// lastParen returns last one word
	console.log(RegExp.lastParen);		// s
	console.log(RegExp["$+"]);
	// multiline returns true or false
	console.log(RegExp.multiline);		// false
	console.log(RegExp["$*"]);

	console.log(RegExp.$1);				// s
	console.log(RegExp.$2);				// t
	console.log(RegExp.$9);				// null, returns 9th
}


































