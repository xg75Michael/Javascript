function steamrollArray(arr) {
    let a = [];
    arr.map(i => {
        if (i instanceof Array) {
            a = a.concat(steamrollArray(i));
        } else {
            a.push(i);
        }
    });
    return a;
}
steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);