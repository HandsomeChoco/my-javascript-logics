function solution(board, moves) {
    if(typeof(board)!=='object') {
        return console.log(`board is not an object.`);
    }
    
    board.map(data => {
        if(data.length < 5 || data.length > 30) {
            return console.log(`board length must be 5 to 30`);
        }
    })
    var board = board;
    var moves = moves;

    console.log(board, moves)
}

solution([[1,2,3,4,5], [2,3,4,6]], )
