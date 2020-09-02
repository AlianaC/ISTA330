/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var arr = Array.from(String(n), Number);
    arr.sort()
    return arr[arr.length-1] - arr[0];

};