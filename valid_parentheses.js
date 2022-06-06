// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
/* An input string is valid if:

*Open brackets must be closed by the same type of brackets.
*Open brackets must be closed in the correct order. 
*/

   ///////////////////////////////////////////////////valid_parentheses_exercise_leet_code////////////////////////////////////////////////////////////////////////////////

var isValid = function(s) {
   


    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" && s[i + 1] === ")" || 
           s[i] === "{" && s[i + 1] === "}" || 
           s[i] === "[" && s[i + 1] === "]") {
            return true;
        } else {
            return false
        }
    }




};
console.log(isValid("()"));
console.log(isValid("[}"));
console.log(isValid(")("));



