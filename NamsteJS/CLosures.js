function outer(){
  var a=10;
  function inner(){
    var b=20;
    function add(){
      console.log(a+b)
    }
    return add
  }
  return inner
}

outer()()()