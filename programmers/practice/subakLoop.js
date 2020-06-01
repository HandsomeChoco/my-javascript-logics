function solution(n) {
    if(typeof(n)!=='number') {
        return console.log('n is not a number');
    }
    if(n>10000) {
        return console.log('n must be less than 10,000')
    }

    let loop = '수박'; 
    let answer = '';

    while(answer.length<n-1) {
        answer = answer+loop;
    }
    
    if(n%2!==0) {
        answer = answer+loop[0];
    }
    return answer;
}

solution(2);