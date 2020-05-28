/*  Writer: HandsomeChoco
    Date: 25, May, 2020
    Content: How to get max value of an Array
*/

function getEvenOrOdd(num) {
    if(isNaN(num)===false) {
        if( num < 0 ) {
            return console.log('음수는 소수가 아닙니다.');
        }
        console.log('입력 값 검증 통과, 로직 시작');
        
        let i=0;
        let even = [];
        let odd = [];

        while(i<=num) {
            if(i%2===0) {
                even.push(i)
            }
            else {
                odd.push(i)
            }
            i++;
        }
        console.log(even);
        console.log(odd);
    } 
    else return console.log('숫자가 아닙니다.');

}

getEvenOrOdd(100)