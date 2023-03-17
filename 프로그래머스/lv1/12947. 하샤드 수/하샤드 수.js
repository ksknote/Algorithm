function solution(x) {
    var answer = true;
    let sum = String(x).split("").reduce((a,b) => parseInt(a)+parseInt(b) , 0);
    if (x%sum ===0) {
        answer =true;
    } else { answer = false;}
    return answer;
}