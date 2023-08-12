function solution(N, stages) {
    var answer = [];
    let ArraySet = [];
    
    for (let i=1; i<=N;i++){
        let total = stages.reduce((acc, cur)=> cur>=i ? acc+1:acc,0);
        let failed = stages.reduce((acc,cur)=> cur === i ? acc+1:acc,0);
        let perFail = failed/total;
        ArraySet.push([i, perFail]);
    }
    let sortedArr = ArraySet.sort((a,b)=> {
        if(a[1]!==b[1]) return b[1]-a[1];
        return a[0]-b[0]
    })

    return sortedArr.map(el=> el[0]);
}