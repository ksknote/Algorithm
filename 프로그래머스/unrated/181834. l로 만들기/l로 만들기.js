function solution(myString) {
    var answer = '';
    for (let s of myString) {
        if(s.charCodeAt(0) < "l".charCodeAt(0)) {
            answer += 'l'
        } else {
            answer += s;
        }
    }
    return answer;
}