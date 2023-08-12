function solution(fees, records) {
    var answer = [];
    let [basicTime, basicFee, perTime, perFee] = fees;
    let recordsArr = records.map(el => el.split(' '))
    .sort((a,b)=> a[1]-b[1])
    .map(el=> {
        let timeArr = el[0].split(':');
        let time = parseInt(timeArr[0]*60) + parseInt(timeArr[1]);
        return [time, el[1], el[2]]
    });
    
    let start = 0;
    let lastTime = 23*60+59; 1439;
    let duration = 0;
    
    for (let i=0; i<recordsArr.length; i++){
        let [time, carNum, inOut] = recordsArr[i];
        let FeeSum = 0;

        if (i === recordsArr.length-1 || carNum !== recordsArr[i+1][1]) { //마지막 or 다음차량이랑 다를 때
            if (inOut === 'IN') {
                duration += lastTime-time
                FeeSum = findFee(duration);
                submit(FeeSum);
            } else {
                duration += time-start;
                FeeSum = findFee(duration);
                submit(FeeSum);
            }
        } else { //다음 차량이랑 같을 때
            if (inOut === 'IN') {
                start = time;
            } else {
                duration += time - start;
                start =0;
            }
        }
    }
    
    function findFee (duration) {
        if (duration-basicTime <= 0) return basicFee;
        return basicFee + Math.ceil((duration-basicTime)/perTime)*perFee
    }
    
    function submit (FeeSum) {
        answer.push(FeeSum)
        start =0;
        duration = 0;
    }

    return answer;
}