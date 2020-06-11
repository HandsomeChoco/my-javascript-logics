function solution(arr){
    var answer = [];
    var now = arr[0];
    answer.push(now);
    for(var i = 1;i < arr.length; i++){
        if(now !== arr[i]){
            now = arr[i];
            answer.push(now);
        }
    }
    return answer;
}
console.log(solution([1,1,3,3,0,1,1]))