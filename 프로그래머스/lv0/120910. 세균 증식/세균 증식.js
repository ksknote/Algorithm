function solution(n, t) {
    var answer = n;
    var i = 1
    while (i <= t){
        answer = answer *2;
        i++;
    }
    return answer;
}