/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
	if (n === 0) {return [];}
    if (n === 1) {return [[1]];}
    let tri = [];
    for (let i = 1; i <= n; i++) {
        let arr = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                arr.push(1);
            } else {
                arr.push((tri[i-2][j-1] + tri[i-2][j]));
            }
        }
        tri.push(arr);
    }
    return tri;
};