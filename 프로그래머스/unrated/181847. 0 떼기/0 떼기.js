function solution(n_str) {
    var answer = '';
    var validate = false;
    for(let s of n_str){
        if(s !== "0" || validate){
            answer+= s;
            validate = true;
        }
    }
    return answer;
}