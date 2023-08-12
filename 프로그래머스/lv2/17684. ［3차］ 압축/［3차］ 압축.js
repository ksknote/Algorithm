function solution(msg) {
    var answer = [];
    let dict = ["",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    for (let i=0;i<msg.length;i++) {
        let input = msg[i];
        let idx = dict.indexOf(input);
        let jump = 0;
        for (let j=i+1; j<msg.length; j++) {
            let newInput = msg[j];
            let newIdx = dict.indexOf(input+newInput);
            if (newIdx === -1) {
                dict.push(input + newInput);
                break;
            } else {
                input += newInput;
                idx = newIdx;
                jump++;
            }
        };
        answer.push(idx)
        i+=jump
    }
    return answer;
}