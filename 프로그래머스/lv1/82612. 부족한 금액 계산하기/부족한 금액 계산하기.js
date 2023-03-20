function solution(price, money, count) {
    var answer = 0;
    let realPrice = 0;
    for (let i = 1 ; i<=count; i++){
        realPrice += price*i;
    }
    
    if (realPrice > money) {
        answer += (realPrice - money);
    }
    return answer;
}