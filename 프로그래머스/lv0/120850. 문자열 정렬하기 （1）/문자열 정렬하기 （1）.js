function solution(my_string) {
    var answer = [];
    for (let i = 0; i<my_string.length; i++){
        if (isNaN(parseInt(my_string[i])) === false){
            answer.push(parseInt(my_string[i]))
        }
    } answer.sort(); 
    return answer;
}