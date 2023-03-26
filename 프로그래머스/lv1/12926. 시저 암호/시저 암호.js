function solution(s, n) {
    var answer = '';
    
    for (let i=0; i <s.length ; i++) {
        const asci = s.charCodeAt(i) + n
        if (s[i] === " "){
            answer += " ";
        } else if (asci < 123&& s.charCodeAt(i)>=97) {
            answer += String.fromCharCode(asci)
        } else if (asci > 122) {
            answer += String.fromCharCode(asci - 26);
        } else if (asci < 91) {
            answer += String.fromCharCode(asci)
        } else if (asci > 90 && s.charCodeAt(i) <=90) {
            answer += String.fromCharCode(asci - 26);
        }
    }
    return answer;
}