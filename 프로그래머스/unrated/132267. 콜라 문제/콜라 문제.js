function solution(a, b, n) {
    var answer = 0;
    var has = n;
    var lala = 0;
    while(has>=a) {
        for(let i=0; i<=has/a;i++){
        lala = i;
    }
        has = has-(a-b)*lala;
        answer += b*lala;
    }
    return answer;
}