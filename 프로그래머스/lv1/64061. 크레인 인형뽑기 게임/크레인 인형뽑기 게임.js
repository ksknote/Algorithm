function solution(board, moves) {
    var answer = 0;
    
    //행 기준으로 되어있던 board 배열을 열 기준으로 변환하여 새 배열 생성
    const board2 = [];
    for (let i = 0; i< board.length; i++){
        var arr1 = [] 
        for(let j = 0; j<board.length; j++){
        if (board[j][i] !== 0) //0은 빈칸을 의미하니 0이 아닌 값만 저장
        arr1.push(board[j][i]); //각 행마다 배열로 담아서
    } board2.push(arr1);} //board2에 배열 안의 배열로 push
    
    
    //moves의 값을 기준으로 board2의 요소들을 바구니에 담음
    
    const baguni = []
     
    moves.forEach((num) => {
        if (board2[num-1].length>0){
            baguni.push(board2[num-1].shift())
        }
    })
    
    //바구니에서 연속된 값을 제외하고 최종 바구니에 담음

    const baguni_final = [];
    
    for (let n of baguni){
        if (n === baguni_final[baguni_final.length-1]){
            baguni_final.pop();
            continue;
        }
        baguni_final.push(n)
    }
    
    //첫 바구니와 최종바구니의 배열 길이의 차이가 터트려서 사라진 reuslt
    answer = baguni.length - baguni_final.length;
    
    return answer;
}