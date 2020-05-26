/*  Writer: EvenNewbieImthePro 
    Date: 25, May, 2020
    Content: How to get max value of an Array
*/

function getMax() {
    var numbers = [2, 5, 10, 13, 1, 8, 4, 3];
    var max = numbers[0];
    console.log(max)
    for(var i=0 ; i < numbers.length ; i++) {
        if(max<numbers[i]) {
            max = numbers[i];
        }
        console.log(`${i}회차 최대값: ${max}`)
    }
    return console.log(max);
}

getMax();