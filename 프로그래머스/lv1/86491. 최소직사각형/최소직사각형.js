function solution(sizes) {
    var answer = 0;
    let arr = [...sizes].map(x => x.sort((a,b) => a-b))
    // let arr1 = [...arr].map(x => x[1])
    let max = [...arr].sort((a,b) => b[1]-a[1])[0][1];
    let min = [...arr].sort((a,b) => b[0]-a[0])[0][0];
    return max*min;
}