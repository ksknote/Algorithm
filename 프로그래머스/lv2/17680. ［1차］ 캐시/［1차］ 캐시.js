function solution(cacheSize, cities) {
    var answer = 0;
    let cacheArr = [];
    
    for (let city of cities) {
    const lowerCaseCity = city.toLowerCase()
     if(cacheArr.includes(lowerCaseCity)) {
         cacheArr = cacheArr.filter(city => city !== lowerCaseCity);
         cacheArr.push(lowerCaseCity);
         answer = answer+1
     } else {
         cacheArr.push(lowerCaseCity)
         answer = answer+5
     }
    if(cacheArr.length > cacheSize) {
            cacheArr.shift()
        }
    }
    return answer;
}