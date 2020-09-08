/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       sort(input);
       var sum = 0;
       for(i = 0; i < input.length; i = i + 2){
              sum += input[i];
       }
       return sum;
};

var sort = function(input) {
       let temp;
       for(i = 0; i < input.length-1; i++){
           for(j = 0; j < input.length-1; j++){
               if(input[j] > input[j+1]){
                   temp = input[j+1];
                   input[j+1] = input[j];
                   input[j] = temp;
               }
           }
       }
   
};