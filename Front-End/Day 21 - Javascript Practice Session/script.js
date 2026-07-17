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
console.log(typeof a1);
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

47:08