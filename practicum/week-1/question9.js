/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    for(i = 0; i < input.length; i++){
        var c = input.charAt(shuffleIndices[i]);
        shuffleIndices[i] = c;
    }
    return shuffleIndices.join("");
};