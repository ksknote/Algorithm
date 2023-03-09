function solution(n) {
    var answer = 0;
    var str = n.toString();
    for (nn of str){
        answer += parseInt(nn);
    }
    return answer;
}