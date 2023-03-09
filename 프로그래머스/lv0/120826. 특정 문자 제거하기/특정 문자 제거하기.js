function solution(my_string, letter) {
    var answer = '';
    let arr = my_string.split("");
    let arr2 =[];
    for(i in arr){
        if (arr[i] !==letter){
            arr2.push(arr[i]);
        }
    }
    answer = arr2.join("")
    return answer;
}