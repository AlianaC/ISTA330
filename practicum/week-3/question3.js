/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    
    let zeroCount = 0;
    for(let i = 0; i < input.length; i++){
        if(i != 0 && input[i] == 1){
            if(zeroCount >= k){
                zeroCount = 0;
            }else{
                return false;
            }
        }else if(input[i] == 0){
            zeroCount++;
        }
    }
    return true;
};
