function solution(numbers, hand) {
    var answer = '';
    const forL = [1,4,7];
    const forR = [3,6,9];
    let Llocation = '*';
    let Rlocation = '#';
    
    for (let i=0; i< numbers.length; i++) {
        if (forL.includes(numbers[i])) {
            answer += 'L'
            Llocation = numbers[i]
            continue;
        } else if (forR.includes(numbers[i])) {
            answer += 'R';
            Rlocation = numbers[i];
            continue;
        }
        let LDistance = findDistance(Llocation, numbers[i])
        let RDistance = findDistance(Rlocation, numbers[i])
        if (LDistance === RDistance) {
            let handVar = hand[0].toUpperCase();
            answer += handVar;
            if (handVar === 'R') Rlocation = numbers[i];
            if (handVar === 'L') Llocation = numbers[i];
            continue;
        } else if (LDistance < RDistance) {
            answer += 'L';
            Llocation = numbers[i];
            continue;
        } else {
            answer += 'R';
            Rlocation = numbers[i];
        }
    }
    return answer;
}
    let keyboard = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    
function findDistance (location, destination) {
    let LocationIndexArr = [];
    let destIndexArr = [];
    let distance = 0;
    for (let i=0; i<4;i++) {
        if (keyboard[i].includes(location)) {
            LocationIndexArr.push(i);
            LocationIndexArr.push(keyboard[i].indexOf(location));
        }
        if (keyboard[i].includes(destination)) {
            destIndexArr.push(i);
            destIndexArr.push(keyboard[i].indexOf(destination));
        }
    }
    distance += Math.abs(LocationIndexArr[0]-destIndexArr[0]) + Math.abs(LocationIndexArr[1]-destIndexArr[1])
    return distance
}