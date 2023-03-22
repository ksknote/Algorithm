function solution(brown, yellow) {
    var answer = [];
    
    for (let i=1;i<=yellow; i++){
        var j = 0;
        if (yellow%i === 0) {
            j += yellow/i;
            if ((i+2)*2 + j*2 === brown){
                answer.push(i+2);
                answer.push(j+2);
                break;
            }
        }
    }
    answer.sort((a,b) => b-a);
    return answer;
}