function solution(num, k) {
    var answer = 0;
    let arr = String(num).split("")
    
    for (let n of arr) {
        if (parseInt(n) === k){
            answer += arr.indexOf(n)+1;
            break;
        }
    } if (answer === 0) {
        answer += -1;
    }
    return answer;
}