// function x(){
//   var i=1;
//   setTimeout(function(){
//     console.log(i)
//   },3000)
// }

// x()

// function x(){
//   for(var i=1;i<=5;i++){
//     setTimeout(function (){
//       console.log(i) ///6,6,6,6,6
//     },i*1000)
//   }
// }
// x()

// function x(){
//   for(let i=1;i<=5;i++){
//     setTimeout(function (){
//       console.log(i) ///1,2,3,4,5
//     },i*1000)
//   }
// }
// x()

function x(){
  for(var i=1;i<=5;i++){
    function close(i){
      setTimeout(function (){
        console.log(i) //1,2,3,4,5
      },i*1000)
    }
    close(i)
  }
}
//  x()


/*
var globally change kore i take r let shob kotakei notun dei
to use var to do this last soln ta....
*/



