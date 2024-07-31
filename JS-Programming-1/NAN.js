console.log(Number("123")) //123
console.log(Number("abcd")) //NaN
console.log(Number("0xa")) //10

//cannot check if it is NAN or not cox NaN==NaN is false

let x=NaN
console.log(x==NaN) //false

console.log(isNaN(x)) //true

console.log(isNaN("tridib")) //true because it converts the value toNumber 

