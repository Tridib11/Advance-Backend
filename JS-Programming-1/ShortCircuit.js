console.log(true||true)
console.log(true||false)

console.log(false||true)
console.log(false||false)

function left(){
  console.log("Left")
  return true``
}

function right(){
  console.log("right")
  return false
}

left()||right()  //left


