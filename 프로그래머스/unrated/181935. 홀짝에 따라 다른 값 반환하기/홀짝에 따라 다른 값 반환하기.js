function solution(n) {
    var answer = 0;
    if(n%2 ===0) {
        for(let i=1; i<=n/2;i++){
            answer += (2*i) ** 2;
        }
    } else {
        for (let i=1; i<= (n+1)/2; i++) {
            answer += (2*i)-1;
        }}
    return answer;
}