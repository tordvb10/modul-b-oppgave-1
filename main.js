/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/
//done in index.html
/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

//your code here
let var1 = "Hello World"; // This is a string
console.log(typeof var1); // Consoles it for verification

let var2 = 123; // This is a number
console.log(typeof var2); // Consoles it for verification

let var3 = true; // This is a boolean
console.log(typeof var3); // Consoles it for verification

let var4 = [var1, var2, var3]; // This is an array
console.log(typeof var4); // Consoles it for verification

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here

console.log(`var2 = ${var2}`);
const operator1 = var2 + var2;
console.log(`operator1 = ${operator1}`);

const operator2 = var2 - var2;
console.log(`operator2 = ${operator2}`);

const operator3 = var2 / var2;
console.log(`operator3 = ${operator3}`);

const operator4 = var2 * var2;
console.log(`operator4 = ${operator4}`);

const operator5 = var2++; // increment next time variable, var2, is used, varible5 is not incremented such as 123 + 1
console.log(`operator5 = ${operator5}`); // previously number is consoled here
console.log(var2);

const operator6 = ++var2; // both is incremented
console.log(`operator6 = ${operator6}`);
console.log(var2);

const operator7 = var2--; // increment next time variable, var2, is used, varible5 is not incremented such as 123 - 1
console.log(`operator7 = ${operator7}`); // previously number is consoled here
console.log(var2);

const operator8 = --var2; // both is incremented
console.log(`operator8 = ${operator8}`);
console.log(var2);

let operator9 = var2;
operator9 += operator9;
console.log(`operator9 = ${operator9}`);

let operator10 = var2;
operator10 -= operator10;
console.log(`operator10 = ${operator10}`);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "Lars";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

//your code here
if (userName.length && userAge <= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("user confirmed.");
} else {
  console.log("user not confirmed.");
}

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = true;

//your code here

const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);
