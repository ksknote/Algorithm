function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((a,b) => a+b);
    return sum/arr.length;
}