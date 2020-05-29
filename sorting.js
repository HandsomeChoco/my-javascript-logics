/*  Writer: HandsomeChoco  
    Date: 26, May, 2020
    Content: Implement sorting element by sorting algorithms. 
*/

const input = [6,1,3,2,4];

function bubbleSort(array) {
    var arrayNeedSort = array;
    console.log(`초기 배열: ${arrayNeedSort}`);

    for(var i=0; i<arrayNeedSort.length; i++) {
        for(var j=i; j<arrayNeedSort.length-1; j++) {

            if( arrayNeedSort[j] > arrayNeedSort[j+1]) {
                var temp = arrayNeedSort[j];
                arrayNeedSort[j] = arrayNeedSort[j+1];
                arrayNeedSort[j+1] = temp;
            }
        }
    }
    console.log(`정렬 후: ${arrayNeedSort}`)
}
bubbleSort(input)