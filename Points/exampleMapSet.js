// Map() 一种对象， 值-值对应， 对于键没有任何要求， 完善了Hash结构
var map1 = new Map([['a','keya'],['b','keyb'],['c','keyc']]);
var map11 = new Map([['a','keya'],['b','keyb'],['c','keyc']]);
var map2 = new Map();

console.log(map1); // [["a","keya"],["b","keyb"],["c","keyc"]]
console.log(typeof(map1)); // Object;
console.log(map1 == map11); // false
console.log(map1.size); // 3
console.log(map1.keys()); // Map Iterator ["a", "b", "c"]
console.log(map1.values()); // Map Iterator ["keya","keyb","keyc"]
console.log(map1.entries()); // Map Iterator [["a", "keya"], ["b", "keyb"],["c", "keyc"]]
map1.forEach(function(value,key,map) {
	console.log(value); // keya, keyb, keyc
	console.log(key); // a, b, c
	console.log(map); // Map {"a"=>"keya", "b"=>"keyb", "c"=>"keyc"}
})
console.log(map2.set('a', 'newA')); // Map {"a"=>"new1"};
console.log(map2.set('b', 'newB')); // Map {"a"=>"newA", "b"=>"newB"}
console.log(map2.set('a', 'newAA')); // Map {"a"=>"newAA", "b"=>"newB"}
console.log(map2.has('a')); // true
console.log(map2.has('c')); // false
console.log(map2.get('a')); // newAA
console.log(map2.get('c')); // undefined
console.log(map2.delete('b')); // true
console.log(map2.delete('d')); // false
console.log(map2.get('b')); // undefined
console.log(map1.clear()); // undefined
console.log(map1); // Map {}

// Set() 类似数组，是数据的一种结构
// only key, no values, no repeat
var set1 = new Set(['a', 'b', 'c']);
var set11 = new Set(['a', 'b', 'c']);
var set2 = new Set(['a', 'a', 'b', 'b', 'c', 'c']);
var set3 = new Set();

console.log(set1); // Set {"a", "b", "c"}
console.log(set2); // Set {"a", "b", "c"}
console.log(typeof (set1)) // Object
console.log(set1 == set11); // true
console.log(set1 == set2); // false
console.log(set1.size); // 3
console.log(set1.keys); // SetIterator {"a", "b", "c"}(native code)
console.log(set1.values); // SetIterator {"a", "b", "c"}(native code)
console.log(set1.entries);

console.log(set3.add('newAA')); // Set {"newAA"}
console.log(set3.add('newBB')); // Set {"newAA", "newBB"}
console.log(set3.add('newAA')); // Set {"newAA", "newBB"}
console.log(set3.has('newAA')); // true
console.log(set3.has('notexist')); // false
console.log(set3.delete('newAA')); // true
console.log(set3.delete('nothing')); // false
console.log(set3); // Set {"newBB"}
console.log(set1.clear()); // undefined
console.log(set1); // Set {}