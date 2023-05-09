function solution(my_string) {
    var answer = [];
    let arr = my_string.split(" ")
    for (let str of arr){
        if(str !== ""){
            answer.push(str)
        }
    }
    return answer;
}