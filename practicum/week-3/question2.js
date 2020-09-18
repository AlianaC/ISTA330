
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
    let count = {};
    let result = [];
    for(let i = 0; i < input.length; i++){
        if(!count[input[i]]){
            count[input[i]] = 0;
        }
        count[input[i]] += 1;
    }
    for(let k in count){
        if(count[k] >= 2){
            result.push(Number(k));
        }
    }
    return result;
 };
