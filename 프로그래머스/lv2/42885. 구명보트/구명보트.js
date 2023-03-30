function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a-b)
    
    let idx1 = 0;
    let idx2 = people.length-1;
    
    while (idx1 <= idx2) {
        if (idx1 === idx2) {
            answer++;
            break;
        } else if (people[idx1] + people[idx2] <= limit) {
            answer++
            idx1++
            idx2--
        } else {
            answer++
            idx2--
        }
    }
    return answer;
}