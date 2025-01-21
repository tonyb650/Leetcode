/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let prefixLength = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].substring(0,prefixLength) != strs[0].substring(0,prefixLength)){
            prefixLength --
            if (prefixLength == 0 ){
                return ""
            }
        }
    }
    return strs[0].substring(0,prefixLength)
};