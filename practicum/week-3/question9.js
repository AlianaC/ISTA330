/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    sortASC(A);
    let result = 0;
    for(let i = 1; i < A.length; i++){
        if(A[i] == A[i - 1]){
            let j = i;
            while(j < A.length && A[j] <= A[j-1]){
                A[j] = A[j] + 1;
                j++;
                result++;
            }
        }
    }
    return result;


};

var sortASC = function(input){
    let temp;
    for(i = 0; i < input.length-1; i++){
        for(j = 0; j < input.length-1; j++){
            if(input[j] > input[j+1]){
                temp = input[j+1];
                input[j+1] = input[j];
                input[j] = temp;
            };
        };
    };
}