function solution(s) {
    
    let upper ="";
    let lower ="";
    for (let i of s){
        if(i === i.toUpperCase()) {
            upper += i;} else { lower += i;}
    } 
    var answer = lower.split("").sort((a,b) => {
        if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;}).join("") 
    + upper.split("").sort((a,b) => {
        if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;}).join("");
    return answer;
}