function solution(arr) {
    var answer = [...arr].sort((a,b)=> a-b).slice(-1);
    
    while(true) {
        let howmany = 0;
        for(let a of arr) {
            if(answer%a === 0)
            howmany++;
        }
        if (howmany === arr.length) break;
        answer++;
    }
    
    return answer;
}