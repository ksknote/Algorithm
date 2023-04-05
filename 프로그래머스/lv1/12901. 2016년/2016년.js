function solution(a, b) {
    var answer = '';
    let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let total = b;
    for (let i=0; i<a-1;i++){
        total += arr[i];
    }
    
    if(total%7 === 1) answer += "FRI";
    if(total%7 === 2) answer += "SAT";
    if(total%7 === 3) answer += "SUN";
    if(total%7 === 4) answer += "MON";
    if(total%7 === 5) answer += "TUE";
    if(total%7 === 6) answer += "WED";
    if(total%7 === 0) answer += "THU";
    
    return answer;
}