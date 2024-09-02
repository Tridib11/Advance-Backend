function cb(a, b, func) {
  
  let ans=func(a,b)
  return ans;
}

function sum(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

const sum1 = cb(12,6, sum);

const subtract1=cb(12,6,minus)

console.log(sum1);
console.log(subtract1)
