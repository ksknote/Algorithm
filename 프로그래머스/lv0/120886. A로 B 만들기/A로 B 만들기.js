function solution(before, after) {
    var answer = 0;
    let ono = before;
    
    for (let a of after)
        ono =  ono.replace(a,"");

    if(ono === ""){
        answer = 1;
    }

    return answer;
}