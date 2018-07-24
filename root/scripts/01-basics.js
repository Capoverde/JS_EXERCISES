// alert('dzialala');
// ++++++++++++++++ JavaScript basic [150 exercises with solution] +++++++++++++++ //
// ---------------- Exe #1 ---------------- //

//  Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

// var date = new Date();
// var day = date.getDate();
// var hh = date.getHours();
// var mm = date.getMinutes();
// var ss = date.getSeconds();
// var time = `${hh}:${mm}:${ss}`

// function dayTime()
// {
//     return `Today is: ${day} \n Current time is: ${time}`
// }
// dayTime();


// // ---------------- Exe #2 ---------------- //

// //  Write a JavaScript program to print the contents of the current window. 

// function print_current_page()
// {
//   window.print();
// }
// print_current_page();

// // ---------------- Exe #3 ---------------- //

// // Write a JavaScript program to get the current date. 
// // Expected Output : 
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();

// function displayDate()
// {
//   if (day < 10 ) {
//    day = '0' + day;
// }
//   if (month < 10 ){
//     month = '0' + month;
// }
//   return `current date is: ${day}/${month}/${year}`
// }
// displayDate();

// // ---------------- Exe #4 ---------------- //

// // Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// // Explanation:
// // Calculate the area of a triangle of three given sides :
// // In geometry, Heron's formula named after Hero of Alexandria, gives the area of a triangle by requiring no arbitrary choice of side as base or vertex as origin, contrary to other formulas for the area of a triangle, such as half the base times the height or half the norm of a cross product of two sides.

// function triangleField(r1, r2, r3){
//     let perimeter = (r1 + r2 + r3)/2;
//     let area = Math.round(Math.sqrt(perimeter*((perimeter-r1)*(perimeter-r2)*(perimeter -r3))));
//     return area;
// }
// triangleField(5,6,7); // >> 15 

// // ---------------- Exe #5 ---------------- //

// // Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

// function animate_string(id) 
// {
//     const element = document.getElementById(id);
//     const textNode = element.childNodes[0]; // assuming no other children
//     let text = textNode.data;

// setInterval(() => {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }

// // ---------------- Exe #6 ---------------- //

// // Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// year = window.prompt("Input a Year : ");
// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);

// // ---------------- Exe #7 ---------------- //

// // Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

// for (let year = 2014; year <= 2050; year++)
//     {
//     const d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//         console.log(`1st January is being a Sunday ${year}`);
//     }
// console.log(d);

// // ---------------- Exe #8 ---------------- //

// // Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

// var randomint = Math.floor(Math.random() * 10 + 1);
// console.log(randomint);
// var guesInt = window.prompt('Input an intiger between 1 - 10 : ');

//         if (guesInt == randomint){
//             alert('Good Work!');
//         }else{
//             alert('Try agian!');
//         }

// ---------------- Exe #9 ---------------- //

// Write a JavaScript program to calculate days left until next Christmas.

// function daysToXmass(){
//     let date = new Date();
//     console.log(`to jest dzisiaj: ${date}`);
//     let xmassDay = new Date(2018,11,24);
//     console.log(`to jest xmassDay: ${xmassDay}`);
//     let result = xmassDay - date;
//     console.log(`a to jest wynik w milisekundach : ${result}`);
//     let humanDate = Math.round(result/86400000);
//     console.log(`do Xmass zosało : ${humanDate} dni`);
// }
// daysToXmass();

// ---------------- Exe #10 ---------------- //

// Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 


// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }


//  ---------------- Exe #11 ---------------- //

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Expected Output : 
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 


// function cToF(celsius) 
// {
//   const cTemp = celsius;
//   const cToFahr = cTemp * 9 / 5 + 32;
//   const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   const fTemp = fahrenheit;
//   const fToCel = (fTemp - 32) * 5 / 9;
//   const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//     console.log(message);
// } 
// cToF(60);
// fToC(45);


//  ---------------- Exe #12 ---------------- //

// . Write a JavaScript program to get the website URL (loading page).

// console.log(document.URL);

//  ---------------- Exe #13 ---------------- //

// Write a JavaScript exercise to create a variable using a user-defined name


// My solution & how I anderstood the question:
// function userName (user){
//     console.log(`let ${user}`);
// }
// userName('Piotr');


// Their solution
// const var_name = 'abcd';
// const n = 120;
// this[var_name] = n;
// console.log(this[var_name])
 
// ---------------- Exe #14 ---------------- //

// Write a JavaScript exercise to get the extension of a filename. 

//  My solution:

// function ext (file){
//     file = file.split('.');
//         return file[file.length - 1];
// }
// console.log(ext('nie-ma.to.jak.home.html'));

// Their solution

// filename = "system.php"
// console.log(filename.split('.').pop());
// filename = "abc.js"
// console.log(filename.split('.').pop());

// ---------------- Exe #15 ---------------- //

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference


// My solution:
// function theertinDouble (number){
    
//      var thrtn = 13;
//      var  diff = number - thrtn;

//      if (diff > thrtn){
//          return diff * 2;
//      }else{
//          return diff;
//      }
// }
// console.log(theertinDouble(40));

// their solution:

// function difference(n)
//  {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
//  }
// console.log(difference(32))
// console.log(difference(11))


// ---------------- Exe #16 ---------------- //

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 

// My solution

// function add (num1, num2){

//      sum = num1 + num2;

//      if (num1 == num2){
//          return sum * 3;
//      }else if (  typeof num1 === 'string' ||  typeof num2 === 'string' ){
//         alert('please enter a correct value!');
//      }else{
//          return sum;
//      }
// }
// console.log(add(3,3));

// ---------------- Exe #17 ---------------- //

// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

// solution

// function nineTeenDiff(n) {
//     if (n <= 19) {
//       return (19 - n);
//       }
//     else
//       {
//        return (n - 19) * 3;
//       }
//   }
  
//   console.log(nineTeenDiff(15));
//   console.log(nineTeenDiff(10));
//   console.log(nineTeenDiff(32));


// ---------------- Exe #18 ---------------- //

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.


// function isFifty (num1, num2){
  
//      add = num1 + num2;
//      if(num1 == 50 || num2 == 50 || add == 50){
//          return true;
//      }else{
//         return console.log('the given number or summ of them are not equal 50')
//      }
// }

// console.log(isFifty(16,25));
// console.log(isFifty(50,1));
// console.log(isFifty(1,50));
// console.log(isFifty(25,25));

// ---------------- Exe #19 ---------------- //

// Write a JavaScript program to check a given integer is within 20 of 100 or 400

// Solution:

// function testhundred(x) {
//     return ((Math.abs(100 - x) <= 20) ||
//        (Math.abs(400 - x) <= 20));
//   }
  
//   console.log(testhundred(10));
//   console.log(testhundred(90));
//   console.log(testhundred(99));
//   console.log(testhundred(199));
//   console.log(testhundred(200));


// ---------------- Exe #20 ---------------- //

// Write a JavaScript program to check from two given integers, if one is positive and one is negative

// My solution:

// function plusMinus (num1,num2){

//     if(num1 > 0 && num2 > 0){
//         console.log("num1 & num2 are positive");
//     }else if (num1 < 0 && num2 < 0){
//         console.log("num1 & num2 are negative");
//     }else if (num1 > 0 && num2 < 0){
//         console.log("num1 is positive & num2 is negative");
//     }else if (num1 < 0 && num2 > 0){
//         console.log("num1 is negative & num2 is positivee");
// }
// }
// console.log(plusMinus(-1,1));

// Their solution:

// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));

// ---------------- Exe #21 ---------------- //

// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


// function PyString (str)
// {
//     const py = "Py";
//     if (str.startsWith('Py'))
//     {
//         return str;
//     }
//     else
//     {
//        return py.concat(str);
//     }
// }
// console.log(PyString('Pytong'));

// ---------------- Exe #22 ---------------- //

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string


// function removeChar (str)
// { 
//        var str1 = str.split('');
//        str1.pop();
//        str1.join('');
//        str1.toString();
//        return str1;
// }
// console.log(removeChar('Inka'));

// ---------------- Exe #22 ---------------- //

// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

// ---------------- Exe #23 ---------------- //

// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

// My solution:

// function newString (str)
// {
//     if (str.length <= 1)
//     {
//         alert('must have atleast 2 characters');
//     }else{
//     str1 = str[0];
//     str2 = str[str.length -1]
//     str3 = str.slice(1, -1);
//     str4 = str2 + str3 + str1;
//     return str4;
//     }
// }
// newString('AzzzzzzzB');

// ---------------- Exe #24 ---------------- //

// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. 

//  My solution:

// function FstringF(str) {
//     if(typeof str != 'string'){
//         alert('please enter letters only');
//     }else{
//     str1 = str;
//     str2 = str[0];
//     str3 = str2 + str1 + str2;
//     return str3;
//     }
// }
// FstringF('PxxxxxxD');


// ---------------- Exe #25 ---------------- //

// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. 

// My solution

// function multiple37 (num)
// {
//     if (num <= 0 || typeof num != 'number' )
//     {
//         console.log('please enter a NUMBER grather than 0');
        
//     }
//     else if (num % 3 === 0 || num % 7 === 0)
//     {
//         console.log(`The ${num} is a multiplication of 3 or 7`);   
//     }
//     else
//     {
//         console.log(`The ${num} is not a multiplication of 3 or 7`);
//     }
// }
// multiple37(12);

// ---------------- Exe #26 ---------------- //

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

// function string3Char (str)
// {
//     if ( typeof str !== 'string')
//     {
//         console.log('please enter the string');
//     }
//     else
//     {
//     str1 = str.substr(-3,3);
//     str2 = str1 + str + str1;
//     return str2; 
//     }
// }
// string3Char('abcDEF');

// ---------------- Exe #27 ---------------- //


// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

// My solution:

// function isJava (str)
// {
//     if (str.startsWith('Java'))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// isJava('JavaScript');

// ---------------- Exe #28 ---------------- //

// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. 

// My solution:

// function isInRange (num1, num2)
// {
//     if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// isInRange (10, 98);

// ---------------- Exe #29 ---------------- //

// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range

// My solution:

// function isInRange (num1, num2, num3)
// {
//     if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 ||  num3 >= 50 && num3 <= 99 )
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// isInRange (10, 98, 50);

// ---------------- Exe #30 ---------------- //

// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// >>>>>>> e43155ba1abea8977edd0e4765591e044df386c1

// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;
    
//   if (str.substring(10, 4) == 'Script') 
//     {
    
//    result_str = str.substring(0, 4) + str.substring(10,str.length);
      
//   }
//   return result_str;
// }

// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

// ---------------- Exe #32 ---------------- //

// function nearest (n, n1)
// {
//   if (100 - n > 100 - n1)
//   {
//     return n;
//   }
//   else
//   {
//     return n1;
//   }
// }
// nearest(20,25);

// ---------------- Exe #33 ---------------- //

// Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive

// My solution:

// function isInRange (n1,n2)
// {
//   if (n1>=40 && n1 <=60 || n1 >=70 && n1 <= 100) 
//   {
//     console.log(`${n1} is in range`);
    
//   }
//   else
//   {
//     console.log(`${n1} is not in range`);
//   }

//   if (n2 >=40 && n2 <=60 || n2 >=70 && n2 <= 100)
//   {
//     console.log(`${n2} is in range`);
//   }
//   else
//   {
//     console.log(`${n2} is not in range`);
//   }
// }
// isInRange(50, 20);

// Their solution:

// function numbers_ranges(x, y) {
//   if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
//       || 
//       (x >= 70 && x <= 100 && y >= 70 && y <= 100))
//      {
//     return true;
//      } 
//     else 
//      {
//     return false;
//   }
// }

// console.log(numbers_ranges(44, 56));
// console.log(numbers_ranges(70, 95));
// console.log(numbers_ranges(50, 89));

// ---------------- Exe #35 ---------------- //


// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.


// ---------------- Exe #36 ---------------- //

// Write a JavaScript program to check if the last digit of the three given positive integers is same

// My solution:

// function isTheSame (x,y,z)
// {
//     x1 = x.toString();
//     y1 = y.toString();
//     z1 = z.toString();
 
//       if 
//       ( x1[x1.length -1] === z1[z1.length -1] 
//         &&
//         y1[y1.length -1] === z1[z1.length -1]
//       )
//       {
//         console.log(`Last digits are equal`);
//       }
//       else
//       {
//         console.log(`Last digits are NOT equal`);
//       }
// }
// isTheSame (30,30,30);

// their solution:

// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0)
//     {
//      return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
//    }
//   else
//     return false;
// }

// console.log(last_digit(20, 30, 400));
// console.log(last_digit(-20, 30, 400));
// console.log(last_digit(20, -30, 400));
// console.log(last_digit(20, 30, -400));

// ---------------- Exe #37 ---------------- //

// Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.

// My solution:

// function lowerUpper (str)
// {
//   str1 = str;
//   if (str1.length < 3)
//   {
//    return str1.toUpperCase();
//   }
//   else
//   {
//    str2 = str1.substring(0,3).toLowerCase();
//    str3 = str1.substring(3, str.length);
//    return str2 + str3;
//   }
// }
// lowerUpper('ABCDEFGHIJKLMN');

// Their solution:

// function upper_lower(str) {
//   if (str.length <= 3) {
//     return str.toUpperCase();
//   }
//   front_part = (str.substring(0, 3)).toLowerCase();
//   back_part = str.substring(3, str.length);  
//   return front_part + back_part;
// }
// console.log(upper_lower("Python"));
// console.log(upper_lower("Py"));
// console.log(upper_lower("JAVAScript"));

// ---------------- Exe #38 ---------------- //

// Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// My solution:

// function exam_status(totmarks,is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
//  return (totmarks >= 89 && totmarks <= 100);
//  }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));


// ---------------- Exe #39 ---------------- //

// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// My solution:

// function sumRange(n1,n2)
// {
//     sum = n1 + n2;
//     if (sum >= 50 && sum <= 80)
//     {
//         return 65;
//     }
//     else
//     {
//         return 80;
//     }
// }
// sumRange(52,15);

// Their solution:

// function sortaSum(x, y) 
//  {
//   const sum_nums = x + y;
//   if (sum_nums >= 50 && sum_nums <= 80) {
//     return 65;
//   }
//   return 80;
// }

// console.log(sortaSum(30,20));
// console.log(sortaSum(90,80));


// ---------------- Exe #40 ---------------- //

// Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8

// My solution:

// function is_eight (n1, n2)
// {
//     minus = n1 - n2;

//     if (minus == 8)
//     {
//         console.log(`the sum of difference is equal to 8`);
//     }
//     else if (n1 == 8 || n2 ==8)
//     {
//         console.log(`one of theme is equal to 8`);
//     }
// }
// is_eight(1,1);

// Their solution:

// function check8(x, y) {
//     if (x == 8 || y == 8) {
//       return true;
//     }
  
//     if (x + y == 8 || Math.abs(x - y) == 8)
//     {
//       return true;
//     }
  
//     return false;
//   }
  
//   console.log(check8(7, 8));
//   console.log(check8(16, 8));
//   console.log(check8(24, 32));
//   console.log(check8(17, 18));

// ---------------- Exe #41 ---------------- //

// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20

// function three_numbers(x, y, z) {
//     if (x == y && y == z) {
//       return 30;
//     }
  
//     if (x == y || y == z || z == x) {
//       return 40;
//     }
  
//     return 20;
//   }
//   console.log(three_numbers(8, 8, 8));
//   console.log(three_numbers(8, 8, 18));
//   console.log(three_numbers(8, 7, 18));

// ---------------- Exe #42 ---------------- //

// Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode. 
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 

// function number_order(x, y, z ) {
//     if ( y > x && z > y) 
//     {
//       return "strict mode";    
//     }
//     else if(z > y) 
//      return "Soft mode";
//     else
//       return "Undefinded";
//   }
  
//   console.log(number_order(10,15,31));
//   console.log(number_order(24,22,31));
//   console.log(number_order(50,21,15));

// ---------------- Exe #43 ---------------- //

// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. 


// My solution:

// function rightmostDigit (x,y,z)
// {
//     x1 = x.toString();
//     y1 = y.toString();
//     z1 = z.toString();
 
//       if 
//       ( x1[1] === z1[1] 
//         &&
//         y1[1] === z1[1]
//       )
//       {
//         console.log(`all of them have thesame rightmost digits`);
//       }
//       else if  ( x1[1] === y1[1] || y1[1] === z1[1] || z[1] == x[1])
//       {
//         console.log(`two of them have the same rightmost digits`);
//       }
// }
// rightmostDigit (30,30,30);

// their solution:

// function same_last_digit(p, q, r) {
//     return (p % 10 === q % 10) ||
//            (p % 10 === r % 10) ||
//            (q % 10 === r % 10);
           
// }

// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));

// ---------------- Exe #44 ---------------- //

// Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.

// Solution

// function lessby20_others(x, y, z) 
// {
//    return (x >= 20 && (x < y || x < z)) ||
//    (y >= 20 && (y < x || y < z)) ||
//    (z >= 20 && (z < y || z < x));
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

// ---------------- Exe #45 ---------------- //

// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

// function isFifteen (x, y)
// {
//   minus = x - y;
//   result = minus;
//   if (x == 15 || y == 15 || result == 15)
//   {
//     return true;
//   }
//     return false;
// }
// isFifteen(15,5);

// ---------------- Exe #46 ---------------- //

// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11

// My solution:

// function sevenEleven ( x , y)
// {
//   if ( x < 0 || y < 0 )
//   {
//     console.log(`enter number grater then zero`)
//   }
//   if (( x % 7 == 0 || x % 11 == 0) || ( y % 7 == 0 || y % 11 == 0 ))
//   {
//     return true;
//   }
//   return false;
// }
// sevenEleven(1,20);

// ---------------- Exe #47 ---------------- //

// Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).

// For example 40 presents in 400 and 4000

// function test_digit(x, y) 
//   {
//     let x_div = parseInt(x / 40),
//         x_mod = x % 40,
//         y_div = parseInt(y / 40),
//         y_mod = y % 40;
//     return x_div === y_div || x_mod === y_mod ||
//            x_div === y_mod || x_mod === y_div;
//   }

// console.log(test_digit(40, 4000));  
// console.log(test_digit(80, 320));  
// console.log(test_digit(89, 4000));

// ---------------- Exe #48 ---------------- //

// Write a JavaScript program to reverse a given string.

// My solution

// function oposite (str)
// {
//   var rev = str.split('').reverse().join('');
//   return rev;
// }
// oposite('abcde');

// ---------------- Exe #49 ---------------- //

// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

function stringPlus (str)
{
    // let alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alfa1 ='abcdefghijklmnopqrstuvwxyz';
    



}
stringPlus('Piotr');