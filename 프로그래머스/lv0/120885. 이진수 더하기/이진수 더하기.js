function solution(bin1, bin2) {
    var answer = '';
    let ban1 = parseInt(bin1, 2);
    let ban2 = parseInt(bin2, 2);
    answer = (ban1+ban2).toString(2);
    
    return answer;
}