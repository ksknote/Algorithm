function solution(left, right) {
    var answer = 0;
    for (let i=left;i<=right;i++){
        var howmany = 0
        for(let j=1;j<=i;j++){
            if(i%j===0){
                howmany++;
            }
        } if(howmany%2 ===0){
                answer += i;
            } else {answer -=i;}
        howmany = 0;
    }
    return answer;
}