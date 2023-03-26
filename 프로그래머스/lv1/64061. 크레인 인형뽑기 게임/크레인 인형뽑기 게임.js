function solution(board, moves) {
    var answer = 0;
    const arr = [];
    for (let i = 0; i< board.length; i++){
        var arr1 = []
        for(let j = 0; j<board.length; j++){
        if (board[j][i] !== 0)
        arr1.push(board[j][i]);
    } arr.push(arr1);}
    
    const arr2 = []
         
    moves.forEach((num) => {
        if (arr[num-1].length>0){
            arr2.push(arr[num-1].shift())
        }
    })

    let arr3 = [];
    
    for (let n of arr2){
        if (n === arr3[arr3.length-1]){
            arr3.pop();
            continue;
        }
        arr3.push(n)
    }
    
    answer = arr2.length- arr3.length;
    
    return answer;
}