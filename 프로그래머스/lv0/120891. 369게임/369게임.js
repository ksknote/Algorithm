function solution(order) {
    var answer = 0;
    let str = String(order);
    let arr = Array.from(str);
    for (i of arr){
        let num = parseInt(i);
        if (num ===3 || num ===6|| num ===9){
            answer += 1;
        }
    }
    return answer;
}