function solution(numbers) {
    var answer = 0;
    const num = [1,2,3,4,5,6,7,8,9];
    for (n of num) {
        var lala = false;
        for(m of numbers) {
            if (n===m){
                lala = true;
                
                break;
            }
        }
        console.log(lala)
        console.log(n)
        if(!lala) {answer+= n;}
    }
    return answer;
}