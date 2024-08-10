// function f(fx,fn){
//   console.log(fx)
//   fn()
//   console.log(fn)
// }

// f(10,function exec(){
//   console.log("I am a higher order function")
// })


let b=[3,1,4,2,7,6]
b.sort(function(a,b){
  return a-b
})
console.log(b)