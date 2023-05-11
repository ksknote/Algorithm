function solution(my_strings, parts) {
    var answer = '';
    for (let i=0; i<parts.length; i++){
        let str = my_strings[i].slice(parts[i][0], parts[i][1]+1);
        answer+= str;
    }
    return answer;
}