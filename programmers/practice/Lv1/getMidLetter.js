function solution(s) {
    if(typeof(s)!=='string') {
        return; 
    }

    if(s.length%2!==0) {
        let len = Math.floor(s.length/2);
        return s[len];
    }
    else {
        let len = s.length/2;
        return s[len-1]+s[len]
    }
}

solution('airpod')