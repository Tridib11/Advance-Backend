function Counter(){
  var count=0
  this.incrementCounter=function(){
    count++
    console.log(count)
  }
  this.decrementCounter=function(){
    count--;
    console.log(count)
  }
}

var Counter1 =new Counter()
Counter1.incrementCounter()
Counter1.incrementCounter()
Counter1.decrementCounter()
