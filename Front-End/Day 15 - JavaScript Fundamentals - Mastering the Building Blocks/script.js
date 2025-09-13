console.log("Hello");
let a = 10;
console.log(a);

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

var b = 20;
var c = "Hello";
var d = true;
console.log(a, b, c, d);


// Taking input from user
prompt("Enter you age :"); // It has issue
// Issue with prompt is that whatever value we take from the user. It always stores in string which can create problem. When we want to take integer value.

//Example Below:-
var num1 = prompt("Enter your 1st number: ");
var num2 = prompt("Enter your 2nd number: ");
console.log(num1+num2); // Here addition is not happening instead it's actually Concatination
console.log(c+d); // Example of concatination

// // To solve the issue with prompt we would simply you type conversion
var num1Real = Number(num1);
var num2Real = Number(num2);
console.log(num1Real+num2Real);


// HOISTING: Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
// console.log(exp);

var exp = 10;

console.log(exp);

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

var age = Number(prompt("Enter your age: "));
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

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

/* Difference between "==" and "==="
    == : Only Campares values
    ===: Compare both values and thier datatype
*/
//Example:-
var x = 10;
var y = '10';

if(x==y){
    console.log("Condition True");
}else{
    console.log("Condition False");
}

if(x===y){
    console.log("Condition True");
}else{
    console.log("Condition False");
}

/* 
    Q3. Ask a user his electricity used in units and Calculate the Bill. If it is greater than 100 units then calculate on the basis of 10 rs per unit, if it's more than 50 units then calculate on the basis of 8rs per unit and if it is less then calculate on 5rs per unit.
*/
var units = Number(prompt("Enter the units: "));
var bill;
if(units>=100){
    bill = units*10;
    console.log("The bill of ",units," units is Rs",bill);
}

else if(units>=50){
    bill = units*8;
    console.log("The bill of ",units," units is Rs",bill);
}

else{
    bill = units*5;
    console.log("The bill of ",units," units is Rs",bill);
}

// Ternary operator
// Example
var m = 8;
console.log(m>10?"Hello":"Not Hello");


/* 
    LOOPS
        - while loop
        - do-while loop
        - for loop
        - for-each loop
*/
var l = 1;
while(l<=10){
    console.log('PEDNAAM', l);
    l++;
}

var dow = 1;
do{
    console.log("DJ BRAVO",dow);
    dow++;
}while(dow<=10);


for(var f=10; f>=1; f--){
    console.log("Mario",f);
}


