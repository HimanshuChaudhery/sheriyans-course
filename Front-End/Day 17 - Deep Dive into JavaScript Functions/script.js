// FUNCTIONS IN JAVASCRIPT
/*
    Function is a block of code that can be reuse and runs only executes whenever it is called.
*/

// Why we need function?
/*
    When we want to implement a feature that needs to be run at a particular time and also needs to be used in many scenerios then instead of writing the same code multiple time we will just use the function.
*/

function greet() // creating a function
{
    console.log("Hello World!");
}

greet(); // function call


// How to pass a parameter to a function
//Examples
function say(msg){
    console.log(msg);
}

say("Hello"); // function_name(arguments);

function add(a,b){
    console.log("The Sum of two number is ", a+b);
}

add(10,2); // function_name(arguments);

function test(a,b) //parameters
{
    console.log(a,b);
}

test(12,14,15,16); // Arguments
// Even after giving more parameter to our function we will not get any error

// A variable whose value is not set are called undefined

/*
    Types of functions or different ways of waeiting function
    - function statement 
    - function expression or Variable Function
    - anonymous function or callback function
*/

// Function Statement
function fs(){
    console.log("Function Statement");
}
fs();

// Saving function in variable
// variable name will be use as function name
var vf = function(){
    console.log("Variable Function or Function expression");
}
vf();

// Anonynous Function : A function that doesn't have name.
// function (){
//     console.log("It has NO NAME!");
// }

// Fat arrow function
// Example
()=>{
    console.log("Arrow Function");
}

// Fat Arrow with one Parameter
let msg = (a)=>{
    console.log("The message is ", a);
}
msg("Himanshu");

// Fat arrow with implicit return 
/*
    Implicit means when we don't have to mention something seperately
    Explicit means when we have to mention something seperately
*/
var fa = () => 12; // implicit
console.log("The value is ",fa);


function abcd(){
    return 12; // explicit
}
console.log("The return value is ",abcd());


// -------------------------- OTHER CONCEPTS ----------------------------------

//rest parameters(...) : are those arguments that are used in function. So we make a array to those arguments
function xyz (a,b,c,...rest)
{
    
}

xyz(1,2,3,4,5,6,7,8);

