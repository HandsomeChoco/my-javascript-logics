/*  Writer: HandsomeChoco 
    Date: 28, May, 2020
    Content: Implement sorting element by sorting algorithms. 
*/

const input = [6,1,3,2,4];

function SelectionSort(array) {
    var arrayNeedSort = array;
    console.log(`삽입 정렬 전 초기 배열: ${arrayNeedSort}`);

    for(var i=0; i<arrayNeedSort.length; i++) {
        var min = arrayNeedSort[i];

        for(var j=i+1; j<arrayNeedSort.length; j++) {
            if(min > arrayNeedSort[j]) {
                min = arrayNeedSort[j];
               
            }
            console.log(j)
        }
        // if(arrayNeedSort !==i) {

        // }
        // var temp = arrayNeedSort[i];
        // arrayNeedSort[i] = min;
        // arrayNeedSort[j] = temp;
        // console.log('----------')
    }
}


