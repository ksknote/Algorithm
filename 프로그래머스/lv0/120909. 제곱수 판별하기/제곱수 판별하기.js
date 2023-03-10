function solution(n) {
    var answer = 2;
    
    for (let i = 2; i <= n/2; i++){
        if (n === i*i){
            answer += -1;
        }
    }
    return answer;
}