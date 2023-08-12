let strArr1 =[];
let strArr2 = []
let exp = /^[A-Z]+$/;
function solution(str1, str2) {
    var answer = 0;
    let upper1 = str1.toUpperCase();
    let upper2 = str2.toUpperCase();
    
    strArr1 = makeArr(upper1);
    strArr2 = makeArr(upper2);
    
    if (strArr1.length === 0 && strArr2.length === 0) return 65536;
    let uniqueSumArr = [...new Set([].concat(...strArr1, ...strArr2))];
    
    let sum = {};
    let equal = {};
    
    uniqueSumArr.forEach((el)=> {
        let filteredArr1 = strArr1.filter(word => word === el);
        let filteredArr2 = strArr2.filter(word => word ===el);
        let max = Math.max(filteredArr1.length, filteredArr2.length);
        let min = Math.min(filteredArr1.length, filteredArr2.length);
        sum[el] = max;
        if(strArr1.includes(el) && strArr2.includes(el)) {
         equal[el] = min;   
        }
    })
    let sumValue = Object.values(sum).reduce((acc, cur)=> acc+cur,0);
    let equalValue = Object.values(equal).reduce((acc, cur)=> acc+cur,0);
    return parseInt(equalValue/sumValue*65536);
}

function makeArr(str) {
    let arr = [];
    for(let i=0; i< str.length;i++) {
        let word = str[i]+str[i+1];
        if(exp.test(word)) {
            arr.push(word)
        }
    };
    return arr
}