function f(fx,fn){
  console.log(fx)
  fn()
  console.log(fn)
}

f(10,function exec(){
  console.log("I am a higher order function")
})