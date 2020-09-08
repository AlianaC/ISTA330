/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        sort(input);
        var biggest = input[input.length - 1];
        for(i = 0; i < input.length-1; i++){
                if(input[i] * 2 > biggest){
                        return false;
                }
        }
   return true;
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