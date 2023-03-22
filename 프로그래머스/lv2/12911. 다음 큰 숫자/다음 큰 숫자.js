function solution(n) {
    var answer = 0;
    let twojeans = n.toString(2);
    var n2 = n+1;
    while(true) {
        if (n2.toString(2).toString().replaceAll("0", "") === twojeans.toString().replaceAll("0", "")) {
            answer += n2;
            break;
        } n2++;
    } 
    
    return answer;
}