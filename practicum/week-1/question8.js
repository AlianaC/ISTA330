/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let result = [];
    for(let i = 0; i < input.length; i++){
        let count = 0;
        let curr = input[i];
        for(let j = 0; j < input.length; j++){
            if(curr < input[j] && input[j] % 2 == 0){
                count++;
            }
        }
        result.push(count);
    }
    return result;
};