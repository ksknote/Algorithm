function solution(word) {
    var answer = 0;
    let arr = []
    const moum = ["A","E","I","O","U"];
    for (let a of moum){
        arr.push(a);
        for (let b of moum) {
            arr.push(a+b);
            for (let c of moum) {
                arr.push(a+b+c);
                    for (let d of moum) {
                        arr.push(a+b+c+d);
                        for(let e of moum) {
                            arr.push(a+b+c+d+e)
                        }
                    }
                }
            }
        }
    return arr.sort().indexOf(word)+1;
}