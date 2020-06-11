function solution(s) {
    let array = s.split(' ');
    let answer = '';

    array.map((data, index) => {
        for(let i=0; i<data.length; i++) {
            if(i%2===0) {
                answer = answer + data[i].toUpperCase();
            }
            else {
                answer = answer + data[i].toLowerCase();
            }
        }
        answer = answer + ' ';
    });

    return answer.substring(0, answer.length-1);
}

console.log(solution("try hello world"));