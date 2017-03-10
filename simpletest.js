'use strict'

//***********************************************************************
// Trialbee Simplified Javascript Programming Test
// Copyright (c) 2017 Trialbee AB, All Rights Reserved
//***********************************************************************

// Instructions:
// This programming test contains 9 tasks
// Some tasks require you to fix errors in the code,
// while others require you to create an algorithm or construct based on
// the instructions.
// Some tasks require you to answer a question textually. Please do so by
// adding your response as comments (// or /*)
// Please note that you are not expected to ace all tasks, rather to show
// that you know the basics of Javascript. Any task from 9 and above are considered bonus
// and are also an indication of what to expect from your carreer as a Javascript developer.
// Good luck and have fun! :)


//******************************************
// 1. Correct the code so that it outputs 10
//******************************************
var multiply = function (a,b) {
  return a*b
}

var result = multiply(5,2);
console.log('multiply(2,5) = '+ result) //should be 10

//******************************************
// 2. Explain the differences
// Why is one comparation true and the other false?
//******************************************
var str42 = '42'
var num42 = 42

console.log('str42 == num42  :', str42 == num42)   //true     
console.log('str42 === num42 :', str42 === num42)  //false    
// Please explain here: 
//== compares only values, while === compares also datatypes
//******************************************
// 3. Type coercion
// Explain why the resulting type is what it is
//******************************************
var numString = 42 + '42' //what is the result and why?
console.log('numString is of type:', typeof(numString), numString)
// Please explain here:
// After concatenation number with string, datatype will become string

//******************************************
// 4. Create a function 'logger(x)' that logs
// its argument 'x' to the console
//******************************************
function logger(x) {
    console.log("Logging out number: " + x + " in console.");
}

logger(55);

//******************************************
// 5. Create a function 'looper(arr)' that loops over an array
// The function takes an array as argument
// and loops over each element and prints its value
// to the console
//******************************************
var arr = [24,43,44,42]

function looper(arr) {
    for(var i = 0; i<arr.length; i++){
       console.log("Looping array element " + i + ", value: " + arr[i] + " in console.");
    }
}

looper(arr);

//******************************************
// 6. Create a callback function that prints
// its argument to the console
//******************************************

var callback = function (date) {
    console.log('Dagens datum är: ' + date);
}   // Implement me

var libraryFunction = function(callback) {
  if (typeof callback === 'function') {
    callback(new Date())
  } else {
    console.log('callback is undefined')
  }
}

libraryFunction(callback);

//******************************************
// 7. Write a function 'upper(str)' that takes an input
// argument, checks that it is a string,
// converts it to upper case and returns it
// Print the result to the console
// If the argument is not a string the function
// should return 'invalid input'
//******************************************
function upper(str) {

  if(typeof str == "string"){
      return str.toUpperCase();
  }else{
     console.log("I need a string!") 
     return "Sorry...";
  }
}

console.log(upper("hey")) //should output 'HEY'


//******************************************
// 8. Complete the function with a switch-case statement
// that makes the function return:
// 'too big' for 'val' = 3
// 'just right' for 'val' = 2
// 'too small' for 'val' = 1
// 'invalid input' for any other value
//******************************************
function compare(val) {
  var output;
  switch (val) {
    case 1:
        output = "too small";
        break;
    case 2:
        output = "just right";
        break;
    case 3:
        output = "too big";
        break;
    case 42:
        output = "invalid output";
        break;
    }
    return output;
}

console.log(compare(3)) //should output 'too big'
console.log(compare(2)) //should output 'just right'
console.log(compare(1)) //should output 'too small'
console.log(compare(42)) //should output 'invalid output' 


// -------------------- Advanced --------------------


//******************************************
// X. Write an algorithm that returns all
// sentences that contain the string 'apple'
// into a new array
// Output the array to the console
//******************************************
var items = [
  'oranges are juicy',
  'some computers are made by apple',
  'coffee and apple juice',
  'pineapples are spiky'
]

var filtered = []; //implement me
for(var i=0; i<items.length; i++){
    var findApple = items[i];
      if (findApple.indexOf('apple') != -1){
          filtered.push(findApple); 
      }
}

console.log(filtered);



//******************************************
// 5. Write an algorithm that converts
// an array of values into a single value
// [2,3,4,5,6,19] should result in 13680
// by multiplying each (computed) value with the previous one.
// 1*2*3*4*5... = 13680
// Assume that the first value is multiplied by 1
// Note: You cannot use 'for' or 'while' loops
//******************************************

var values = [2,3,4,5,6,19]

var result = values.reduce(function(x,y){ 
  return x*y;});  //implement me

console.log(result + ' should equal 13680') 


//******************************************
// 6. Make the car run at speed 42
// Create a constructor function
// Add a "drive()" function to the prototype
// that logs 'running at speed' <speed> to the console when called
//******************************************
// implement constructor function that sets the speed to 42
// create new car object
function vehicle(speed) {
    this.speed = speed;
    this.drive = function(){
        console.log( 'running at speed: ' + this.speed);
    };
}

var car = new vehicle('42');
car.drive(); //should ouput 'running at speed: 42'

//******************************************
// 7. What's up with "this"
// Explain why the standard function and the
// arrow function differ in behavior
//******************************************
var stdFunction = function() {
  return this.value
}

var arrowFunction = () => {
  return this.value
}  

console.log('arrowFunction', arrowFunction.call(o))  //Why is this 'undefined'?
// Please explain here: Arrow functions does not work with keyword "this", as regular functions do

//******************************************
// 8. Create an object (called "counter") with a private variable
// The object should have three functions; increment(), decrement() and getValue()
// You should be able to call increment() to increase the value by one
// You should be able to call decrement() to decrease the value by one
// The snippet should output the value of 'counter.getValue()'
// Note: the private variable must not be accessible from the outside
// Hint: Use an IIFE to create an instance of the object
//******************************************
//implement me

////////////////////////////////// By regular constructor function ///////////

/* function Calculation() {      //creating Calculation class
   var newValue = 0;               //initialising / assigning private variable
  
   this.increment = function() {  
      newValue++;
      //return newValue;           //returning the private variable by a public method
   };
   this.decrement = function() {
      newValue--;
      //return newValue;            //returning the private variable by a public method
   };
   this.getValue = function() {
      return newValue;              //returning the private variable by a public method
   };
};   */

////////////////////////////////// By IIFE /////////////////

var Calculation = (function() {               //creating Calculation class by IIFE

  var Constr = function() {                   //constructor function
      var newValue = 0;                       //Assigning private variable
           this.increment = function() {  
                newValue++;
               return newValue;              //returning the private variable by a public method
           };
            this.decrement = function() {
               newValue--;
               return newValue;              //returning th private variable by a public method
           };
            this.getValue = function() {
                newValue =  newValue;       
                return newValue;             //returning the private variable by a public method
           };      
      }

    Constr.prototype = {                // create prototype  
        constructor: Calculation
    }
      
    return Constr;                      
})();

var counter = new Calculation();        //create a counter object

counter.increment(); //increment by one
counter.increment(); //increment by one
counter.decrement(); //decrement by one
console.log('counter.getValue() should be 1. Output is', counter.getValue());  //log out counter's value


//******************************************
// 9. make the function 'f' work as intended,
// ie make it output 'val is 43' rather than
// throwing an exception
//******************************************

var ff = function (val) {
  console.log('val is', o.val)
}

var o = {
  val: 43,
  f: function(ff) {
    ff(this.val);
  }
}

o.f(ff);

