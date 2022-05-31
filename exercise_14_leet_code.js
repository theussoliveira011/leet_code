///////////////Exercise 14 leet code/////////////////////////////
var longestComoonPrefix = function(strs) {
    if(strs.length == 0) return "";
    for(i = 0; i < strs[0].length; i++) {
        if(!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
        }
        return strs[0];
}