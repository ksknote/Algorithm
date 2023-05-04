function solution(num_list) {
    var answer = 0;
    const gob = [...num_list].reduce((acc, cur) => acc*cur);
    const sum = [...num_list].reduce((acc, cur) => acc+cur) ** 2;
    if (gob<sum) answer += 1;
    return answer;
}