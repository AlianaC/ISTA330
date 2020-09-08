/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var d = -1;
    sort(input);
    for(let i = 0; i < input.length; i++){
        let count = 0;
        let num = input[i];
        for(let j = i; j < input.length; j++){
            if(input[j] == num){
                count++;
            }
        }
        if (num == count){
            if(d == -1){
                d = num
            }else{
                d = Math.max(d, num);
            }
        }
    }
    return d;
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