function solution(participant, completion) {
    var answer = '';
    participant = participant.sort();
    completion = completion.sort();
    
    console.log(participant, completion)
    for (let i=0; i< completion.length; i++) {
        if (participant[i] !== completion[i]) {
            answer += participant[i];
            break;
        }
    }
    if (answer === '') return participant[participant.length-1]
    return answer;
}