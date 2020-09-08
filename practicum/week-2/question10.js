/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    sort(input);
    let total = [];
    let min = input[1] - input[0];
    for(let i = 0; i < input.length - 1; i++){
        if(min > input[i+1] - input[i]){
            min = input[i+1] - input[i];
        }
    }
    for(let i = 0; i < input.length - 1; i++){
        if(input[i+1] - input[i] == min){
            total.push([input[i],input[i+1]]);
        }
    }
    return total;
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