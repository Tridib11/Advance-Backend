function x(){
  var z=7
  function y(){
    console.log(z)
  }
  return y
}

// x()



var k=x()
k()