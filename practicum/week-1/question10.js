/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var arr = [];
    num = n.toString();
    for(i = 0; i < num.length; i++){
        arr.push(Number(num[i]));
    }
    sort(arr);

    return arr[arr.length-1] - arr[0];

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

