let x=-0
console.log(x===0) //true

console.log(Object.is(x,-0))//true
console.log(Object.is(x,0)) //false


let num=-2
console.log((num>=0)?1:-1)
