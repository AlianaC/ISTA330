/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {

    let regex = /[\W_]/g;
    s = s.toLowerCase().replace(regex, "");
    
    let sBack = "";
    for(let c = s.length-1; c >= 0; c--){
        sBack += s[c];
    }

    return sBack == s;
};