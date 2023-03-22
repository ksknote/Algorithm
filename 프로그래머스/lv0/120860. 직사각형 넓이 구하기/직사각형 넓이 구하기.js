function solution(dots) {
    var answer = 0;
    let height = 0;
    let width = 0;
    for (let i=1; i<dots.length; i++){
        if (dots[i][0] === dots[0][0]){
            height += Math.abs(dots[i][1]-dots[0][1]);
        } if (dots[i][1] === dots[0][1]){
            width += Math.abs(dots[i][0]-dots[0][0]);
        }
    }
    answer = height*width;
    return answer;
}