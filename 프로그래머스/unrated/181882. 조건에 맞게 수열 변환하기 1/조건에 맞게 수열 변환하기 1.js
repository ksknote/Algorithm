function solution(arr) {
    var answer = [];
    for (let n of arr){
        if (n>=50 && n%2 ===0) {
            answer.push(n/2)
        } else if (n<50&& n%2 !==0){
            answer.push(n*2)
        } else {answer.push(n)}
    }
    return answer;
}