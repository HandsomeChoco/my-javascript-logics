function solution(array, commands) {
    if(typeof(array)!=='object' || typeof(commands)!=='object') {
        return console.log('array or commands is not an object')
    }
    if(array.length<1 || array.length>100 || commands.length < 1 || commands.length > 50) {
        return console.log(`wrong input`)
    }

    array.map(data => {
        if(data < 1 || data > 50) {
            return console.log(`array elements value have to 1 to 50`)
        }
    })

    let answer = [];
    commands.map(data => {
        if(data.length>3) {
            return console.log(`commands length is over than 3`)
        }
        let tempArray = array.slice(data[0]-1, data[1]);
        tempArray.sort(function (a, b) {
            return a - b;
        });
        answer.push(tempArray[data[2]-1]);
    })
    console.log(answer)
    return answer;
}

solution([1,5,2,6,3,7,4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);