console.log("Hello!");

// Strings are also called Character array
// In string, whitespaces will also going to be have a index
var str = "Porche";
console.log(str.slice(0, 3)); 
// SLICE()
// Slice() is a method used to extract or print a portion of an array or a string and return it as a new array or string, respectively. It does not modify the original array or string. 
// Like if we want to "por" from porche we will use slice(0,4) if will only print value from 0 to 3 index.

//Template Literals or template string : it allows you to write string and do calculation at the same time. Declare using `` backticks
let str1 = `My age is ${12+11}`;
console.log(str1);

// SPLIT()
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.

//Example
let str2 = "Hello ji kaise hon";
console.log(str2.split("i")); // split on the basis of "i"
console.log(str2.split(" ")); // spliting in the basis of "space"
console.log(str2.split("e")); // spliting on the basis of "e"
// Every single time our str2 split it forms a new array

// REPLACE()
// It replaces a specified substring or character with another substring or character
// The replace() method does not change the original string. It will make a copy then do change on the copied string or array.
let str3 = "Hello ji kaise ho";
console.log(str3.replace("i","y")); // it will only replace the first "i" it will ecountered 
console.log(str3.replaceAll("i","y")); // it will replace all "i" with "y" 

// INCLUDES()
// includes() checks if a substring exists within a string or not.
let str4 = "Hello, my name is HERO";
console.log(str4.includes("HERO"));
console.log(str4.includes(","));
console.log(str4.includes("Daimon"));

/*
    2. Conditional statements in JavaScript
        - if
        - if-else
        - else-if
        - Ternary Operator
        - switch
*/

//Example
let num1 = 12;
if(num1>11){
    console.log("Hey");
}

if(num1>11){
    console.log("Hey");
}
else{
    console.log("HELLO");
}

let num2 = 80;
if(num2>13){
    console.log("Yes it's greater than 13");
}
else if(num2>50){
    console.log("Yes it is also greater than 14");
}
else{
    console.log("Sorry, it is smaller than both the condition");
}

// Ternary Operator (frequently used in ReactJS)
console.log(num2<18?"Hello World":"Hi World");
12>11 ? console.log("Hey") : console.log("HEHEHEHEHE");
// Can also be written in both ways 

// Switch
/*
    syntax:
        switch(value){
            case value:
                code;
                break;
            
            case value:
                code;
                break;
            
            default:
                code;
                break;
        }
*/
let choice = Number(prompt("Enter the your choice "));
switch(choice){
    case 1:
        console.log("YOUR CHOICE IS 1");
        break;
    
    case 2: 
        console.log("YOUR CHOICE IS 2");
        break;

    case 3:
        console.log("YOUR CHOICE IS 3");
        break;

    default:
        console.log("YOUR DON'T HAVE CHOICE");
        break;
}

/*
    3. LOOPS in JavaScript
        - while
        - do while
        - for
        - forEach (only used for arrays)
        - for...in (used for object properties)
        - for...of (used for iterable objects like Array, Strings)
        - recursion 
*/

let w = 1; //variable declaration
while(w<=10){
    console.log("While",w);
    w++;
}

let dw = 10;
do{
    console.log("Do-While",dw);
    dw=dw+10;
}while(dw<=100);

//Example of straight forward loop
for(let i = 1; i<10; i++){
    console.log("FOR",i);
}

//Example of dynamic loop
let arr = [1,2,3,4,5,6];
for(let i=0; i<arr.length; i++){
    console.log("Dynamic",arr[i]);
}

/*
    LOOP control statement
     - break : used to EXIT the loop means it will immediately stops the loop. 
     - continue : it is used to skip the current iteration and moves to the next
*/
//Examples
for(let i=0; i<10; i++){
    if(i==6){
        break;
    }
    console.log("break",i);
}

for(let i=0; i<10; i++){
    if(i%2==0){
        continue;
    }
    console.log("continued",i);
}

