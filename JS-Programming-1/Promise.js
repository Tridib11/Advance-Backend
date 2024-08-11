function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeOut() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(20);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 5000);
  });
}


function output(num){
  console.log(`The number is ${num}`)
}



createPromiseWithTimeOut().then(output)

