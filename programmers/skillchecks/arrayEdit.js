function solution(array, commands) {
    if(array.length < 1 && array.length >100 ) return;
    if(commands.length < 1 && commands.length > 50) return;
    
    var array = array;
    var commands = commands;
    
    var answer = [];
    for(var i=0; i<commands.length;i++) {
        array.slice(commands[i][0]-1,commands[i][1]);
        answer = 
        console.log(i)
    }
    

    console.log(answer)
    return answer;
}

solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]])