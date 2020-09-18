/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    let result = [];

    // Gets running product on left for each index
    let left = [];
    left[0] = 1;
    for(let i = 1; i < input.length; i++){
        left[i] = input[i-1] * left[i-1];
    };

    // Gets running product on right for each index
    let right = [];
    right[input.length - 1] = 1;
    for(let i = input.length - 2; i >= 0; i--){
        right[i] = input[i+1] * right[i+1];
    };

    // Gets total product from left and right
    // for each index
    for(let i = 0; i < input.length; i++){
        result[i] = left[i] * right[i];
    };

    return result;
};

