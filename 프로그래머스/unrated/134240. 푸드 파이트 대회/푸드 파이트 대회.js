function solution(food) {
    var answer = '';
    let arr = []
    for (let i=1;i<food.length;i++){
        if(food[i]%2===0) {
            var lala = i.toString().repeat(food[i]/2)
            arr.push(lala);
        } if(food[i]%2!==0 && food[i] !==1) {
            var lolo = i.toString().repeat((food[i]-1)/2)
            arr.push(lolo);
        }
    }
    let arr2=[...arr].reverse();
    arr.push("0");
    return arr.concat(arr2).join("");
}