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




{
  // console.log(r)// it will say cannot acces X before initialization called as TDZ(Temporal Dead Zone)
  let r=2
  console.log(r)
}

// console.log(r) //r is not defined
