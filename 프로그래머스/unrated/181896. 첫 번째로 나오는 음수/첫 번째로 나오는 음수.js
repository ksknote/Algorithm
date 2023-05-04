function solution(num_list) {
    var answer = 0;
    for (let i in num_list) {
        if (i == num_list.length-1 && num_list[i] >= 0) {
            answer -= 1;
            break;
        } else if (num_list[i] < 0) {
            answer += Number(i);
            break;
        }
    }

    return answer;
}