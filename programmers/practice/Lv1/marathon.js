function solution(participant, completion) {
    if(typeof(participant)!=='object') {
        console.log('not an object');
        return;
    }
    for(var i=0; i<participant.length; i++) {
        if(typeof(participant[i])!=='string') {
            console.log('element of object is not a string.');
            return;
        }
    }
    
    participant.sort();
    completion.sort();
    
    for(let i=0; i<participant.length; i++) {
        if(participant[i]!==completion[i]) {
            return participant[i];
        }
    }
}

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "mislav", "ana"]));