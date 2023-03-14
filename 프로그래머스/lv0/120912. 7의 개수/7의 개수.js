function solution(array) {
    var answer = 0;
    let str = array.join("")
    let arr = str.split("")
    
    let output = arr.filter((x) => x==="7");
    answer = output.length

    return answer;
}