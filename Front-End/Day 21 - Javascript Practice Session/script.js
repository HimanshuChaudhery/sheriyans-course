// Ques 1
console.log("Hello, Javascript!");
console.warn("Hello, World!");
console.error("Hello, Sun");
console.table({name: "Himanshu", age: 26});

// Ques 2
var n1 = 35;
var n2 = 10;
var n3 = 7;

var ans = n1*2-(n2/2)+n3;
console.log(ans);

// Ques 3
let a1 = "123";
let a2 = 123;
let a3 = true;
let a4 = null;
console.log(typeof a1); // typeof is a operator which determins the datatype of a variable.
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);

// typeof works on the concept of tags.
// In javascript every single thing has a data tag.
// Now what happened they accidentally give Object a datatag 000 and they give the same tag to null.
// So, whenever someone goes for typeof on null it will give datatype as object.

// How to answer 
// To be very honest null should not be belongs to object types it's a weird behaviour for object.

// Ques 4

// Using temp variable
var b1 = 10;
var b2 = 12;
var temp = 0;

temp = b1;
b1 = b2;
b2 = temp;

console.log(b1 +" "+ b2);

// Not uisng any Temp variable (Just in Javascript)
var c1 = 15;
var c2 = 16;

[c1,c2] = [c2,c1];

console.log(c1, c2);

// Lets see one more way to do that
var a = 12;
var b = 13;

a = a + b; // 12 + 13 = 25
b = a - b; // 25 - 13 = 12
a = a - b; // 25 - 12 = 13

console.log(a, b);


// Ques 5
// Console.group() is used when we want to group console logs into a section/group.

console.group("Programming Languages");
console.log("C++");
console.log("Java");
console.log("Javascript");
console.log("Python");
console.groupEnd();

// Lets see another example
// Now this time we can see we are using groupCollapsed()
console.groupCollapsed("Data Structure");
console.log("Array");
console.log("Stack");
console.log("Queue");
console.log("LinkedList");
console.groupEnd();

// Can we make group inside group
console.groupCollapsed("Data Structure");
    console.group("Programming Languages");
    console.log("C++");
    console.log("Java");
    console.log("Javascript");
    console.log("Python");
    console.groupEnd();
console.log("Array");
console.log("Stack");
console.log("Queue");
console.log("LinkedList");
console.groupEnd();

// Ques 6
const obj1 = {
    name : "Himanshu",
    role : "Student",
    experience : "internship"
};
console.log(obj1);

// Lets update the role
obj1.role = "SN dev";
console.log(obj1);

// (ROUGH Understanding)With constant we cannot change the value but we can change value which is inside a value of a constant.
// Example
const arr = [1,2,3,4]; //array is a value for constant and values of array  
//arr = 12; // This will not going to work
// Means our "assign" operator will not going to work because we change the whole thing instead of change the a part of a value.
// More like it will not going to lets us RESET the Constant variable.

// In JS Constant allows us to update values inside the datatypes is array, object but it will not allows us to reset the variable like changing the datatype of a variable like from array to string.

/*
In JavaScript, const declares variables that cannot be reassigned and are block-scoped.Key Characteristics
    No Reassignment: You cannot assign a new value to the variable after declaration.
    Block Scoped: The variable is only accessible within the {} block where it is defined.
    Must Be Initialized: You must assign a value immediately when declaring it.
    Not Immutable: Objects and arrays declared with const can still have their contents modified.
*/

Object.freeze(obj1); // To stop any updation in our Object.

// Ques 7 : Convert string into Number using 3 different methods 
var word = "50";
console.log(typeof word);

// Number method
console.log(typeof Number(word));

//parseInt method (MOST USED)
console.log(typeof parseInt(word));

// In JS, if we put "+" in front of any string it will become number
console.log(typeof +word); // DON"T USE IT BAD PRACTICE


// Ques 8: Check if "Javascript" contains "Script" without using .includes()

let str = "JavaScript";
// Using includes() method 
// console.log(str.includes("Script")); // It will return BOOLEAN value
 
// Using indexOf() method
var exist = str.indexOf("Script"); // It will return the index of "S" from where our "Script" is getting started.
if(exist !== -1){
    console.log(true);
}else{
    console.log(false);
}

// Using Search() method
var exist = str.Search("Script"); // It will search the "Script" in out String.
if(exist !== -1){
    console.log(true);
}else{
    console.log(false);
}

// Ques 9: Create an array of 5 numbers and log the sum using .reduce();
// var arr = [1,2,3,4,5];



// Ques 10: Difference between undefined, NAN and null.

/*

Undefined: When we don't assign any value to the variable in that case the value that is assigned by the system is undefined.
null: it means nothing.
NaN: It stands for "Not a Number". When we try to do any invalid mathematical calculation ("raj"/10) it will give NaN.

*/