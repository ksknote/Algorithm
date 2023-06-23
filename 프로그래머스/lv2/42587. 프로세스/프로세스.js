function solution(priorities, location) {
    var answer = 0;
    const initLength = priorities.length
    const idx = priorities.map((x, i)=> i);
    while (priorities.length > 0) {
        var popped = priorities.shift();
        var poppedIdx = idx.shift();
        for (let item of priorities) {
            if (popped < item) {
                priorities.push(popped);
                idx.push(poppedIdx);
                break;
            }
        }
        
        if(poppedIdx !== [...idx].pop() && poppedIdx === location) {
            answer = initLength - idx.length;
            break
        }
    }
    return answer;
}