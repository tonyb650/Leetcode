// * APPROACH #1, more performant because result array is sized (memory is allocated) up front.
// * 'push' is an expensive operation because it must resize the array every time it is called
// * An alternative to [...args] would be 'new Array(arr.length)'
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = [...arr];
    for(idx=0;idx<arr.length; idx++) {
        newArray[idx] = fn(arr[idx],idx);
    }
    return newArray
}

//* APPROACH #2, less performant because it uses 'push' to resize the array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function transform (arr,fn){
    let result = [];
    for(let i = 0 ; i < arr.length; i++){
        result.push(fn(arr[i], i));
    }
    return result;
}