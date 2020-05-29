function solution(participant, completion) {
    if(typeof(participant)!=='object') {
        console.log('not an object');
    }
    for(var i=0; i<participant.length; i++) {
        if(typeof(participant[i])!=='string') {
            console.log('element of object is not a string.');
            return;
        }
    }
    var participant = participant;
    var completion = completion;
    var answer = '';
    return answer;
}

solution(['a','b','c'])