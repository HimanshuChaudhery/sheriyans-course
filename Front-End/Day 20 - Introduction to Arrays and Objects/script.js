// Arrays and Objects
var a = 12;
var b = 32;

// What is Array ?
// Ans: In JS array is a Data structure that can store more than one values in a single variable.
var c = [12,13];

// In JS array, we can also store store multiple values of different types.
var d = [32,'Hello',33];

// Why we use array ?
// Ans: To store values multiple values in single variable.

// When to use Array?
// Ans: Whenever we want to store and traverse multiple through single variable.

// How to create an array?
// var variable_name = [value1, value2, value3....];
var e = [34,45,56];

//How to access member of an array?
//Ans: We can access member of array using indexes (0,1,2,...)
console.log(e[1]);

// Another way of defining array
var f = new Array();
f[0] = 97;
f[1] = 54;

//But when to use What ?
// When you told to make empty array and array with 5 values in that case we use:-
var arr1 = [];
var arr2 = [1,2,3,4,5];

// But we have to create of limited size like 100, in that case we use:-
var arr3 = new Array(100);

// EXERCISE
var arr4 = new Array(30);

for(var i=0; i<30; i++){
    arr4[i] = i;
}

// As we all know that in JS array we can multiple of same and different data types.
var g = [1,2.4,true,[],"harsh",{},function(){}];

// In all other programming languages Arrays are HOMOGENEOUS (store values of same Datatype)
// But in Javascript arrays are HETEROGENEOUS (can store Values of different Datatypes).
// very weird example:
var h = ["a",12,function(){}, {}, {}, NaN, undefined];

// Is array can have negetive index ?

// ============================================================================

// OBJECTS
var obj = {};

// WHAT is an OBJECT ?
// Ans: In JS, Object is nothing but a way to store data in key-value pairs.
// SYNTAX: 
// var obj_name = {
//     property: value;
// };

var obj1 = {
    name: "harsh",
    age: 26,
    email: "test@yahoo.com",
    isHandsome: false
};

console.log(obj1.name);
console.log(obj1.age);

// 45:00

// NOT EVERYDAY YOU ARE MOTIVATED TO WORK. BUT YOU SHOULD BE DOING IT. YOU SHOULD BE! 