function solution(progresses, speeds) {
    var answer = [1];
    const arr = progresses.map((progress,i)=> {
        const days = (100-progress)/speeds[i];
        return ((100-progress)%speeds[i])===0 ? days : parseInt(days+1)});
    console.log(arr)
        var now = arr[0];
    for(let i=1;i< arr.length; i++) {
        if(arr[i]<= now) {
            answer[answer.length-1]++
        } else {
            answer.push(1)
            now = arr[i]
        }
    }
    return answer;
}