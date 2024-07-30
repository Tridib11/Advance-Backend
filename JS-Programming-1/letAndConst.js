//let variable can be assigned a value throughout their lifetime but const variable cannot
let x=10
x=20
console.log(x)

// const y=90
// y=9    //Assignment to a constant variable


// Block Scoping

// {
//   let nme="Tridib"
//   console.log(nme)
// }



// console.log(nme)//nme is not defined



//TDZ Depends on the order



{
  // console.log(r)// it will say cannot acces X before initialization called as TDZ(Temporal Dead Zone)
  let r=2
  console.log(r)
}

// console.log(r) //r is not defined



//For var variable it doesnot do anything like the above


{
  var z=10
  console.log(z)
}

console.log(z)

//var variables are function scoped .If it is not in the function it is in the global scope
function printX(){
  var t=10
  console.log(t)
}

printX()

// console.log(t)// will result in t is not defined




//for function in var varible it will result in undefined rather than saying cannot be used before declaring . This is because of Hoisting and no TDZ is here 

//Declaration hoisting


function tr(){
  console.log(cv) //undefined
  var cv=10
  console.log(cv)
}

tr()


//Let and const are blocked scope where var is not 

console.log(x)
{
  var rohan=2
  {
    let rohan=5
  }
  console.log(rohan)
}
