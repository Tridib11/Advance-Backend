function counter(){
  var count=0;
  return function incrementCounter(){
    count++;
    console.log(count)
  }
}

var counter1=counter()
for(let i=1;i<=5;i++){
  counter1()
}