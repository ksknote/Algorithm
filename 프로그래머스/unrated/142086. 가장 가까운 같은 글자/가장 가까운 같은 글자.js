function solution(s) {
    var answer = [];
    for (let i in s){
        // console.log(s.indexOf(s[i]));
        // console.log(i);
        if(s.indexOf(s[i]) < i) {
            var idx =  s.indexOf(s[i]);
            var letter = s[i];
            var lala = new RegExp(letter);
            answer.push(i- idx);
            s = s.replace(lala, " ");
            
        } else {
            answer.push(-1);
        } 

    }
    return answer;
}