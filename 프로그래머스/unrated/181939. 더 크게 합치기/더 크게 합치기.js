function solution(a, b) {
    var answer = 0;
    let strA = a.toString();
    let strB = b.toString();
    
    if (strA+strB > strB+strA) {
        answer += Number(strA+strB)
    } else [
        answer += Number(strB + strA)
    ]
    
    return answer;
}