function solution(arr1, arr2) {
    var answer = [];
    for (let j = 0; j < arr1.length; j++){
        let arr = [];
        for (let i = 0; i<arr1[0].length;i++){
            arr.push([...arr1][j][i] + [...arr2][j][i]);
        }
        answer.push(arr);
        arr = [];
    }

    return answer;
}