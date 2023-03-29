function solution(n) {
    var answer = 0;
    for (let i = 1; i<=n ; i++){
        let sum = 0;
        let j = i;
        while(sum <= n){
            if (sum === n){
                answer++;
                break;
            } else {
                sum += j;
                j++;
            }
        }
    }
    return answer;
}