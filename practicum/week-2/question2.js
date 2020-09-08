
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
    let maxSum = 0;

    for (i = 0; i < input.length; i++) {
        let currSum = 0;
        for (j = i; j < input.length; j++) {
            currSum += input[j];
            if(maxSum < currSum){
                maxSum = currSum
            }
        }
    }     
    return maxSum;
 };
