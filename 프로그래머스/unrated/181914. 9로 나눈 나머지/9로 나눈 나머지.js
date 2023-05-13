function solution(number) {
    var answer = 0;
    let sum = 0
    for(let s of number) {
        sum += Number(s)
    }
    return sum%9;
}