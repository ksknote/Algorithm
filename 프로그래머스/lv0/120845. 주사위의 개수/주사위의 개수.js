function solution(box, n) {
    var answer = 0;
    var width = Math.floor(box[0]/n);
    var height = Math.floor(box[1]/n);
    var ss = Math.floor(box[2]/n);
    answer = width*height*ss;
    return answer;
}