function solution(board, moves) {
    if(typeof(board)!=='object' || typeof(moves)!=='object') {
        console.log(`parameter board and moves both have to be an array`);
        return;
    }
    if(board>30 || board < 5 || moves < 1 || moves > 1000) {
        console.log(`The parameter board should be 5 <= board <= 30 and, 1 <= moves <= 1000`)
    }
    
    let dolls = [];
    let answer = 0;

    // 헷갈리니까 moves 배열의 값을 1씩 빼고 시작.
    for(let i=0; i<moves.length; i++) {
        moves[i] = moves[i]-1;
    }

    moves.map((data, index) => {
        let pick = board[data];
        if(pick[pick.length-1]) {
            console.log(`before push to doll: ${dolls}`)
            dolls.push(pick[pick.length-1]);
            pick.pop();
        }
    })
    return answer;
}
solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])