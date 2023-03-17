function solution(n) {
    var answer = 0;
    let rute = Math.sqrt(n);
    if (rute%1 ===0) {
        answer += Math.pow(rute +1 , 2);}
        else { answer -= 1}
    return answer;
}