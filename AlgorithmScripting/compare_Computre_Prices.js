//// solution from website
// 重写这个方法
// 生成随机数字数组
function generateNumbers(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(Math.random() * 100);
        arr.push(num);
    }
    return arr;
}
// 价格比较排序的函数
function cmpPrice(a, b) {
    return a.price - b.price;
}
// 查找arr1 和 arr2 最相近的两个数的下标
function findNearest(arr1, arr2) {
    // 把对应的数组分别转换成 x, y 对象
    let x = [],
        y = [];
    for (let i = 0; i < arr1.length; i++) {
        x.push({
            price: arr1[i],
            index: i
        });
    }
    for (let i = 0; i < arr2.length; i++) {
        y.push({
            price: arr2[i],
            index: i
        });
    }
    // 按价格排序 复杂度O(mlgm)+O(nlgn)
    x.sort(cmpPrice);
    y.sort(cmpPrice);
    let a = x.shift();
    let b = y.shift();
    let delta = 2147483647; // 历史最小差值
    let idx1 = 0; // 历史最小差值对应的arr1.index
    let idx2 = 0; // 历史最小差值对应的arr2.index
    // 两路归并, 复杂度O(m+n)
    while (true) {
        let d = Math.abs(a.price - b.price);
        if (d == 0) { // 两个值相等，这是最小的差值了，直接返回结果
            return [a.index, b.index];
        }
        // 如果当前的差值比历史最小差值还小，那么就更新下
        if (d < delta) {
            idx1 = a.index;
            idx2 = b.index;
            delta = d;
        }
        // 两个队列都空了，返回
        if (x.length == 0 && y.length == 0) {
            return [idx1, idx2];
        }
        if (x.length == 0) { // x空了，那么从y取一个
            b = y.shift();
        } else if (y.length == 0) { // y空了，那么从x取一个
            a = x.shift();
        } else if (a.price < b.price) { // 谁小从谁那取
            a = x.shift();
        } else {
            b = y.shift();
        }
    }
    // 总复杂度O(mlgm)+O(nlgn) + O(m+n) 即 O(mlgm) 假设m>n
}
// 穷举解法，用来验证答案
function exhaustive(arr1, arr2) {
    let delta = 2147483647;
    let idx1 = 0;
    let idx2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let d = Math.abs(arr1[i] - arr2[j]);
            if (d < delta) {
                idx1 = i;
                idx2 = j;
                delta = d;
            }
        }
    }
    return [idx1, idx2];
}
// 执行函数
function solve() {
    let arr1 = generateNumbers(parseInt(Math.random() * 10 + 1));
    let arr2 = generateNumbers(parseInt(Math.random() * 10 + 1));
    console.log("arr1 =", arr1);
    console.log("arr2 =", arr2);
    let result = findNearest(arr1, arr2);
    console.log('当前算法结果:', result, '左:', arr1[result[0]], '右:', arr2[result[1]], '差值', Math.abs(arr1[result[0]] - arr2[result[1]]));
    let result2 = exhaustive(arr1, arr2);
    console.log('穷举算法结果:', result2, '左:', arr1[result2[0]], '右:', arr2[result2[1]], '差值', Math.abs(arr1[result2[0]] - arr2[result2[1]]));
}
// solve();

//// My Solution
function mySolution(arr1, arr2) {
    let newArr1 = [];
    arr1.map((item, index) => newArr1.push({
        'price': item,
        'index': index,
        'isArr1': true
    }));
    let newArr2 = [];
    arr2.map((item, index) => newArr2.push({
        'price': item,
        'index': index,
        'isArr1': false
    }));
    newArr1.push(...newArr2);
    let myArr = newArr1.slice(0);
    myArr.sort((a, b) => {
        return a.price - b.price;
    });
    console.log('sorted Arr: ', myArr);
    let minDiffPrice = 1000000;
    let tempItem;
    let newArr1Index = 0;
    let newArr2Index = 0;
    myArr.map(item => {
        // init
        if (minDiffPrice === 1000000) {
            tempItem = item;
            tempItem.isArr1 ? newArr1Index = tempItem.index : newArr2Index = tempItem.index;
            minDiffPrice--;
        } else {
            if ((item.price - tempItem.price) < minDiffPrice && item.isArr1 !== tempItem.isArr1) {
                // need to update
                tempItem.isArr1 ? newArr1Index = tempItem.index : newArr2Index = tempItem.index;
                minDiffPrice = item.price - tempItem.price;
                tempItem = item;
                console.log('diffPrice: ' + minDiffPrice);
                tempItem.isArr1 ? newArr1Index = tempItem.index : newArr2Index = tempItem.index;
                // console.log([newArr1Index, newArr2Index]);
            } else if (item.isArr1 === tempItem.isArr1) {
                tempItem = item;
            }
        }
    });
    return [newArr1Index, newArr2Index];
}

function exeMySolution() {
    let arr1 = generateNumbers(parseInt(Math.random() * 11 + 1));
    let arr2 = generateNumbers(parseInt(Math.random() * 11 + 1));
    console.log('mySolution Arr1: ', arr1);
    console.log('mySolution Arr2: ', arr2);
    let result = mySolution(arr1, arr2);
    console.log('result Index: ', result);
}
exeMySolution();