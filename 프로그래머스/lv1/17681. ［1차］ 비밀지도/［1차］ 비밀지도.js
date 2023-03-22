function solution(n, arr1, arr2) {
    var answer = [];
    
    let twojeans1 = [...arr1]
            .map(x => x.toString(2))
            .map(x => parseInt(x))
            //.map(x => x.replaceAll("1", "#"))
    let twojeans2 = [...arr2]
            .map(x => x.toString(2))
            .map(x => parseInt(x))
    
    let newArr = twojeans1
            .map((num , i) => num + twojeans2[i])
            .map(x => x.toString())
            .map(x => x.replaceAll("1", "#"))
            .map(x => x.replaceAll("2", "#"))
            .map(x => x.replaceAll("0", " "))
            .map(x=> x.padStart(twojeans1.length, " "))
    

    

    return newArr;
}