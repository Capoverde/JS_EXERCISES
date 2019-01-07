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

// ------------------- #2 ------------------- //

// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function  isPalindrom (str)
// {
  
// }
// console.log(isPalindrom('reber'));

// ------------------- #3 ------------------- //

function clk(){
  console.log('click');
}

const btns = document.querySelectorAll('.btn2, .btn1')
const btns2 =[...btns];
console.log(btns2);

for(i = 0; i < btns2.length; i ++){
  btns2[i].addEventListener('click', clk)
}

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');


// let btns =[btn1, btn2]

// for(i = 0; i < btns.length; i ++){
//   console.log(btns[i]);
// }