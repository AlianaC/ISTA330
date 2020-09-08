/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    let a = 0;
    let b = 1;
    let sum;

    for(let i = 0; i < n - 1; i++){
        sum = a + b;
        a = b;
        b = sum;
    }

    return b;
};