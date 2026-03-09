// If we defend a variable and does't give any value in that case it will show Undefined 


function abcd(a,b,c,...arr){
    console.log('12');
}

abcd();


// Hoisting ->  When we make a variable and function then JS will move the the declaration part of variable and function at top during the code execution.

// iife -> Immediately Invoke Function Expression
(function iife(){

    // To make the variable scope private. So, that it will not get exposed or changed
    var a = 12;
    console.log("Hey");

})();

//<-------------------------------------------------------------------------->

// hofs: Higher Order Functions
// A function which either returns the function() or take a function as parameter or both.

// Type 1: Returing function
function hofs1() {
    return function(){
        console.log("hehehehe");
        return function(){
            console.log("NIJJJJJJ");
        }
    };
}
hofs()();
// ans();

// Type 2:  Accepting function() as parameter
function hofs2(func){ //function declaration
    func();
}

// function call
hofs2(function() // Passing function() as parameter
{
    console.log("heyheyheyheyhey");
});

//<-------------------------------------------------------------------------->

// CAll BACK Function
// A Function that passes another function as a parameter during function call is called Call-Back Function

function call_back(val){
    // If function accepts the another function as a paramter then it is Higher Order Function 
}

call_back(function(){
    // This is a Call-Back function
})
/* 
    FOR MORE UNDERSTANDING :
    A function that passes another function as a parameter during function call is called Callback function.
    A function that accepting the another function as a during function execution is called Hight order function. 

*/

// First Class function (It's a property of JS) :  first class function ek darja(Status, Position) hai jo ki JS mien functions ko milla hai, is darje mein kaha jatta hai ki function ko hum value ki tarah use kr sakte hai

var a = function(){
    prompt("Enter you Name: ");
};

console.log(a);
//<-------------------------------------------------------------------------->

// Pure Function :  A function that doesn't change the value of any globe variable
function add(m,n){
    return m+n;
}

console.log(add(5,6));

// Impure Function: A function that changes the value of any global variable.
let total = 0;
function addToTotal(a){
    total +=a;
}
addToTotal(5);
console.log(total);

// Scope 
var a = 12; // Global Scope

function b() //
{
    var b = 12; // Local Scope
}

// Closure -> Just see it for now
/* 

    A Closure is a concept in a function "returns" a another function and returned function has used the data of parent function. 

*/
function abcd(){
    var z = 15; // data of parent function
    return function(){
        console.log(z);
    }
}

var ans = abcd();
console.log(ans);


//<-------------------------------------------------------------------------->

// NOT NECCESARY TO UNDERSTAND IT RIGHT NOW
(function nec(){
    
    // Example of Shorthand Method Definition: This concise syntax is used for defining methods within object literals and ES6 classes.
    return{
       
        set: function(val){
            a = val;
        },
        get: function () {
            console.log(a);
        },
    };

})();


var Sherry = (function sherrylibrary(){
    return {
        // function_name: function ()

        imageEffect: function(){
            console.log("images effect");
        },
        mouseFollower: function(){
            console.log("mouse follower");
        },
    };
})();

// Invoke function will going to return a object which will need to be stored in variable
// AGAIN NOT NECCESARY TO UNDERSTAND IT RIGHT NOW, it just a possibility we can also write in this way




