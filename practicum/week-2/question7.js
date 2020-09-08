/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    let result = [];
    for(let i = 0; i < M[0].length; i++){
        result.push([0,0]);
    }

    for(let i = 0; i < M.length; i++){
        for(let j = 0; j < M[i].length; j++){
            result[j][i] = M[i][j];
        }
    }
    return result;
};