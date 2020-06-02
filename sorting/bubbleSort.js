/*
    Writer: HandsomeChoco
    Content: Implement sorting element by sorting algorithms. 
    Content: Implement sorting element by bubble sort algorithm
*/
const input = [6,1,3,2,4,5,10,9,7];

function BubbleSort(array) {
    var arrayNeedSort = array;

    for(var i=0; i<arrayNeedSort.length; i++) {
        for(var j=i; j<arrayNeedSort.length-1; j++) {
            if( arrayNeedSort[j] > arrayNeedSort[j+1]) {
                var temp = arrayNeedSort[j];
                arrayNeedSort[j] = arrayNeedSort[j+1];
                arrayNeedSort[j+1] = temp;
            }
        }
    }
    console.log(`정렬 후: ${arrayNeedSort}`);
    return arrayNeedSort;
}
BubbleSort(input);