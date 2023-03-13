function solution(n) {
    var answer = 0;
    for (let i =4;i <=n;i++){
        var howmany = 0;
        for (let j = 1 ; j<=i ; j++){
            if (i%j === 0){
                howmany += 1;
            }
        } if(howmany >= 3){
                    answer += 1;
                } 
    }
    return answer;
}