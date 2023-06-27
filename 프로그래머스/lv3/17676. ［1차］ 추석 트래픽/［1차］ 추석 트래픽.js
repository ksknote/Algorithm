function solution(lines) {
    if (lines.length === 1) return 1;
    
    let resultArray = [];
    
    const linesArray = lines.map(line => {
        const lineArr = line.split(" ");
        const time = lineArr[1].split(":");
        const timestamp = parseFloat(time[0])*3600 + 
              parseFloat(time[1])*60 + 
              parseFloat(time[2]);
        
        return [timestamp  - parseFloat(lineArr[2])+0.001, timestamp]
    })
    for (let i=0; i< linesArray.length-1; i++) {
        var sum = 0;
        for(let j= i+1; j<linesArray.length; j++){
            if (linesArray[j][0] < linesArray[i][1]+1) sum++;
        }
        resultArray.push(sum+1)
    }
    
    return resultArray.sort((a,b) => b-a)[0];
}