function solution(arr) {
    var answer = [];
    if (arr.length === 1) arr[0] = -1;
    else {
    let arr2 = [...arr].sort((a,b) => a-b);
        arr.splice(arr.indexOf(arr2[0]),1)
    }
    return arr;
}