// function outer(){
//   var a=10
//   function inner(){
//     console.log(a)
//   }
//   return inner
// }

// outer()()

function outest() {
  var c = 30;
  function outer() {
    var a = 10;
    function inner() {
      console.log(a, c);
    }
    return inner;
  }
  return outer;
}

var test = outest()();
test();
