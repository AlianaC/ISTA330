/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let groups = [];

    for(let i = 0; i < n; i++){
        if(i < 9){
            groups.push([i+1]);
        }else{
            groups[i % 9].push(i);
        }
    }

    let len = groups[0].length;
    let i = 0;
    while(groups[i].length == len){
        i++;
    }

    return i;

};