function solution(cards1, cards2, goal) {
    var answer = '';
    
    while (goal.length >0) {
        const targetWord = goal.shift();
        
        if (cards1[0] === targetWord) {
            cards1.shift();
            continue;
        }
        
        if (cards2[0] === targetWord) {
            cards2.shift();
            continue;
        }
        
        return 'No';
    }
    return 'Yes';
}