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




