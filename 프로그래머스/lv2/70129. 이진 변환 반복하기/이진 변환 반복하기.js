function solution(s) {
    var answer = [];
    let count = 0;
    let byeZero = 0;
    while(s!== '1') {
        count++
        let prevLength = s.length;
        s= s.replaceAll('0','');
        let newLength = s.length;
        byeZero += prevLength -newLength;
        s = String(newLength.toString(2));
    }
    return [count, byeZero]
}