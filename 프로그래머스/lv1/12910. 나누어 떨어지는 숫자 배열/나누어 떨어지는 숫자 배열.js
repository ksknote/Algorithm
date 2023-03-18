function solution(arr, divisor) {
    var answer = [];
    for (let a of arr){
        if (a%divisor ===0)
            answer.push(a);
    } answer.sort((a,b) => a-b);
    if (answer.length ===0)answer.push(-1);
    return answer;
}