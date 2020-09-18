/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let count = 0;
    let m = 0;
    for(let i = 0; i < input.length; i++){
        if(count == 0){
            m = input[i];
        }
        if(input[i] == m){
            count++;
        }else{
            count--;
        }
    }
    count = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] == m){
            count++;
        }
    }
    if(count > input.length/2){
        return m;
    }
    return -1;


};