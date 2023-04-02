function solution(maps) {
    var answer = 0;
    const [n,m]= [maps.length, maps[0].length];
    const check = maps.map(i => i.map(v => 0));
    //const check = Array.from({length: n }, Array(m).fill(0));
    
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    const queue = [[0,0]]; //queue에 0,0부터 넣기 시작
    check[0][0] = 1; //queue에 들어간 좌표는 check에 누적 이동 수 입력
    //console.log(queue.shift());
    while(queue.length) {
        if(x===n-1 && y===m-1) break;
        var x = queue[0][0]; 
        var y = queue[0][1];
        queue.shift();
        //맨 앞에서 꺼내서 기준점으로 삼음. 현위치
        for(let i=0;i<4;i++){
            var [nx, ny] = [x+dx[i], y+dy[i]];
            // var nx = x+dx[i]; 
            // var ny = y+dy[i];
            //x,y로부터 이동 가능 위치를 nx,ny로 할당 
            if(nx < 0 || ny < 0 ||nx >=n||ny>=m) continue; //이동 가능 위치가 배열을 이탈하면 스킵
            else if(maps[nx][ny] === 1 && check[nx][ny]===0) { 
                //maps에 
                check[nx][ny] = check[x][y]+1;
                queue.push([nx,ny]);
            }
        }
    }
    if(check[n-1][m-1]===0) return -1;
    return check[n-1][m-1];
}