function solution(name, yearning, photo) {
    var answer = [];
    for (let p of photo){
        var sum = 0;
        for(let i in name){
            for(let y of p){
                if(name[i] === y){
                    sum += yearning[i];
                }
            }
        }
        answer.push(sum);
    }
    return answer;
}