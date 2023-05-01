function solution(t, p) {
    var answer = 0;
    console.log(t.slice(0,3))
    for(let i=0; i<=t.length-p.length; i++){
        if(t.slice(i,i+p.length) <=p){
            answer++
        }
    }
    return answer;
}