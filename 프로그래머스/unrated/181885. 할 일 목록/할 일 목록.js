function solution(todo_list, finished) {
    const arr = [...todo_list].filter((x, i)=> {
       return finished[i] === false
    })
    console.log(arr)
    console.log(finished[0])
    return arr;
}