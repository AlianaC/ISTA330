/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    let total = 0;
    for(let i = 0; i < B.length; i++){
        if (A.indexOf(B[i]) != -1){
            total++;
        }
    }
    return total;
};
