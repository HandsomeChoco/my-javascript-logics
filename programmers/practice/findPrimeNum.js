function solution(n) {
    if(n>1000000 || n<2) {
        return console.log('입력 값 범위 에러');
    }
    
    var answer = [];

    for(let i=2; i<=n;i++) {
        let isPrimeNum = true;
        for(let j=2; j<i; j++) {
            if(i%j===0) {
                isPrimeNum = false;
                continue;
            }                                                                                                                  
        }
        if(isPrimeNum) {
            answer.push(i);
        }
    }
    console.log(answer);
    return answer.length;
}