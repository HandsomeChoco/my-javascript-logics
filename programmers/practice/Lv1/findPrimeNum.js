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
                break;
            }                      
            continue;                                                                                            
        }
        if(isPrimeNum) {
            answer.push(i);
        }
    }
    console.log(answer);
    return answer.length;
}

/* 
    이 알고리즘은 일부 테스트 케이스를 통과하지 못한다. 
    그래서 '에라스토테네스의 체' 라고 소수를 찾는 방법을 사용해 구현하기로 했다.
*/

function PrimeNumFilter(num) {
    let array = [];

    /*  num 의 크기와 동일한 배열 생성 및 원소 i 푸쉬; */

    for(let i=0; i<num+1; i++) {
        array.push(i);
    }
    
    /*  num 의 제곱근까지만 계산해 불필요 반복 최소화.
        array[i] 가 소수면, 반복문 진행
    */
    for(let i=2; i*i<=num; i++) {
        if(array[i]) {
            for(let j=i*i; j<=num; j+=i) {
                array[j]=false;
            }
        }
    }

    // 0,1 은 소수가 아니기 때문에 false 로 변환 
    array.splice(0,2, false, false);

    const result = array.filter((value) => {
        return value !== false;
    })
    console.log(array)
    return result.length;
}

PrimeNumFilter(25)