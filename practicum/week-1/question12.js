/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has ewual number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var total = 0;
  var i = 0;
  while(i < input.length){
    var count = 0;
    var j = i;
    while(input.charAt(j) == 'a'){
      count++;
      j++
    }
    if(input.slice(j,j+count) == "b".repeat(count)){
      alert(input.slice(j,j+count));
      alert("b".repeat(count));
      total++;
    }
    i = j + 1;
  }
  return total;
};