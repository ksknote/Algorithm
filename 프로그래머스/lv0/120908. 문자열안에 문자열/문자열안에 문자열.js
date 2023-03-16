function solution(str1, str2) {
    var answer = 0;
    let arr = str1.split(str2)
    if (arr.length > 1){
        answer+=1;
    } else { answer += 2}
    return answer;
}