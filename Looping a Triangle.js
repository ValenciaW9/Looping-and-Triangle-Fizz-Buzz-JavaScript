/* Looping a Triangle 
// Write a loop that makes seven calls to console.log to output the following
#
##
###
####
#####
######
#######

it may be useful to know that you can find the length of a string by writing .length after it.
let abc = "abc";
console.log(abc.length);
// -> 3
*/
// The triangle patern, utilizing the loop in generating the desired number rows. Each row will a number of "#" equal to the row.



for (let row = 1; row <= 7; row++) {
  let triangle = "";
  for (let column = 1; column <= row; column++) {
    triangle += "#";
  }
  console.log(triangle);
}

//Pseudocode
//In this code, the outer loop (for (let row = 1; row <= 7; row++)) controls the number of rows in the triangle. The inner loop (for (let column = 1; column <= row; column++)) generates the "#" characters for each row.
//The result will be the triangle pattern you described:
//#
//##
//###
//####
//#####
//######
//#######

/*FizzBuzz
//Weite a program that uses console.log to print all the numbers from 1 to 100, 

//with to exceptions, For numbers divisible by 3, print "Fizz" instead of the number , and for numbers divisible by 5 (and not 3)

//print"Buzz"  instead.
//when you have the program working ,modify tiyr program to print "Fizz Buzz" for the numbers that are divisble by  both 3 and 5 ( and still print  "fizz " or "Buzz" for numbers divisible by only one of those ).
*/

//for(numbers = 1; numbers <= 100; numbers++)
//if(numbers % 3 == 0 && numbers % 5 == 0)
for (var numbers = 1; numbers <= 100; numbers++) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numbers % 3 === 0) {
    console.log("Fizz");
  } else if (numbers % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numbers);
  }
}



//Psuedocode: 
//Start a loop to iterate from 1 to 100:

//For each number in the range, do the following:
//Check if the current number is divisible by both 3 and 5:

//If the number is divisible by 3 and 5, print "FizzBuzz".
//Check if the current number is only divisible by 3:

//If the number is divisible by 3, print "Fizz".
//Check if the current number is only divisible by 5:

//If the number is divisible by 5, print "Buzz".
//If none of the above conditions are met, simply print the current number.

//Repeat the loop for the next number.

