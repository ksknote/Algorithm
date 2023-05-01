function solution(num) {
    var answer = 0;
    var num2 = num;
    while (true) {
        if (answer === 500) {
            answer = -1;
            break;
        } if (num2 === 1) {
            break
        }
        if (num2%2 === 0){
            num2 = num2/2;
            answer ++
        } else {
            num2 = num2*3+1;
            answer ++
        } 
    }
    return answer;
}