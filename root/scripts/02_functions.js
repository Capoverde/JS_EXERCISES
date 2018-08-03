// ------------------- #1 ------------------- //

// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223	

// My solution:

// function revNum (num)
// {
//   s1 = num.toString();
//   s2 = s1.split('');
//   s3 = s2.reverse();
//   s4 = s3.join('');
//   s5 = parseInt(s4);
//   return s5;
// }
// console.log(revNum(1234));
 
// Their solution:

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(32243));