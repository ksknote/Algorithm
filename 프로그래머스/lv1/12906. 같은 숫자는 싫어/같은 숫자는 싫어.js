function solution(arr)
{
    var answer = [...arr].filter((value,i) => arr[i]!==arr[i+1]);
    return answer;
}