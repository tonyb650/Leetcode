

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// Implementation of 'guess API' for offline testing
const guess = (n) => {
    let answer = 10;
    if (n>answer) return -1
    if (n<answer) return 1
    return 0
}

// Binary search solution
var guessNumber = function(n) {
    let min = 1;
    let max = n;
    let mid = 0;
    let res = null;
    do {
        mid = Math.floor((min+max)/2);
        res = guess(mid);
        if(res == 1){
            min = mid + 1;
        } else if ( res == -1){
            max = mid - 1;
        }
    }
    while(!res==0);
    return mid;
};