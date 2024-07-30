/*
The left() || right() statement in JavaScript is utilizing the logical OR (||) operator. Here's a step-by-step explanation of how it works in this context:

Function left Execution: The function left() is called first.

It executes console.log("left"), which prints "left" to the console.
The console.log function returns undefined.
Logical OR Evaluation: The OR operator (||) evaluates the left side first.

Since left() returns undefined, which is a falsy value in JavaScript, the evaluation moves to the right side of the || operator.
Function right Execution: The function right() is then called.

It executes console.log("right"), which prints "right" to the console.
The console.log function returns undefined.

*/


function left(){
  return console.log("left")
}

function right(){
  return console.log("right")
}


left()||right()    //left right