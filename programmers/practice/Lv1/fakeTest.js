function solution(answer) {
    
    let mathIdiots = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let count = [0,0,0];

    for(let i=0; i<answer.length; i++) {
        if(answer[i]===mathIdiots[0][i%5]) {
            count[0]++;
        }
        if(answer[i]===mathIdiots[1][i%8]) {
            count[1]++;
        }
        if(answer[i]===mathIdiots[2][i%10]) {
            count[2]++;
        }
    }
    
    let max = Math.max(...count);
    let winner = [];

    for(let i=0; i<count.length; i++) {
        if(max===count[i]) {
            winner.push(i+1);
        }
    }
    return winner;
}

console.log(solution([1,3,2,4,2]));