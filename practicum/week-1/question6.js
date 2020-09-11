/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    sort(input);
    if (input.length % 2 == 0){
        let x = input.length / 2 - 1;
        return (input[x] + input[x + 1]) / 2;
    }return input[(input.length - 1) / 2];
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