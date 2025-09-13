// VANILLA JS
console.log("Hello world");

console.warn("This is some BULLSHIT!"); // to print warning in console

console.error("This is not loading"); //  to print error in console

// JS VARIABLES

var a; // Declaration
a=10; // Initialisation
b=20;
console.log(a,b);

// Dynamic languages : These the languages where we don't need to define the data type during declaration. eg: Python, Javascript
// Static languages: are those languages where we have to define the data type during declaration. eg: C, C++, JAVA.

// Arthematic Operator
console.log("SUM: ",a+b);
console.log("SUBTRACT: ",a-b);
console.log("MULTIPLY: ",a*b);
console.log("DIVIDE: ",a/b);
console.log("MODULUS: ",a%b);
console.log("POWER: ",a**b);

console.log(a,"power",b);

// Put alert or message pop up in your website
alert("This is message");

// Put option(yes/no) pop-up in your website or takes CONFIRMATION
confirm("Are you 18+");

// To enter value through pop-up
prompt("Enter your name: ");

// Examples:
var ans = confirm("Are you 18+"); 

var user = prompt("Enter your name: ");
var age = prompt("Enter your age: ");
console.log("The user name is ",user,"and his age is ",age);

// Increment and Decrement Operator
var num1=1;
console.log(num1++); //post increment
console.log(++num1); //pre increment
console.log(num1--); //post decrement
console.log(--num1); //pre decrement


// DEEP DIVE JS

/* Another ways of declaring variable
    1. var : it saves as window object(it was a mistake). Scope of "var" is throught out program(Global variable)
    2. let : scope of "let" is limited to the code block it is declared inside.
    3. const : Value inside "const" variable does changes once it is declared
*/

// ES6 was revolution for JS
