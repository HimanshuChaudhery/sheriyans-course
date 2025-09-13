// console.log("Hello");
// let a = 10;
// console.log(a);

/* Datatypes in JS
    1. Primitive
        - Numbers (10, 9, 9.1, 8.12) range:: 2^53-1
        - String ('a','Hello', "CARS")
        - Boolean (true and false)
        - undefined : variable is declared but not initialized
        - null
        - Symbol: it is used in advance concept when creating unique values
        - BigInt: for very big integer numbers

    2. Reference or Derived
        - Array
        - Object
        - Function
*/

// var b = 20;
// var c = "Hello";
// var d = true;
// console.log(a, b, c, d)


// // Taking input from user
// prompt("Enter you age :"); // It has issue
// // Issue with prompt is that whatever value we take from the user. It always stores in string which can create problem. When we want to take integer value.

// //Example Below:-
// var num1 = prompt("Enter your 1st number: ");
// var num2 = prompt("Enter your 2nd number: ");
// // console.log(num1+num2); // Here addition is not happening instead it's actually Concatination
// // console.log(c+d); // Example of concatination

// // To solve the issue with prompt we would simply you type conversion
// var num1Real = Number(num1);
// var num2Real = Number(num2);
// console.log(num1Real+num2Real);


// HOISTING: Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
// console.log(exp);

// var exp = 10;

// console.log(exp);

// Conditional Statement

if(10>=5){
    console.log("Yes");
}
else{
    console.log("No");
}

/* 
    Q1. Ask a user his age and check if he is adult or not
*/

// var age = Number(prompt("Enter your age: "));
// if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }

/*
    Q2. Ask user his/her percentage and report them their GRADE
*/

var pert = Number(prompt("Enter your percentage"));
if(pert>=90){
    console.log("You got A+ grade");
}

else if(pert>=80){
    console.log("You got B+ grade");
}

else if(pert>=60){
    console.log("You got C+ grade");
}

else{
    console.log("You FAILED");
}

/* 
    BINARY OPERATOR
    true - 1
    false - 0
        &&(AND)
        ||(OR)

*/
// Example
var ag = 10;

if(ag>18 && ag<60){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

