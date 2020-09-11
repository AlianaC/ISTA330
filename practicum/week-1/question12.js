/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  let i = 0;
  let total = 0;
  while(i < input.length){
    let aCount = 0;
    let j = i;
    while(input[j] == 'a'){
      aCount++;
      j++;
    }
    let curr = input.substring(j, j + aCount);
    if(aCount != 0 && curr.indexOf('a') == -1){
      total++;
      i = j + 1;
    }else{
      i++;
    }
  }
  return total;
};
