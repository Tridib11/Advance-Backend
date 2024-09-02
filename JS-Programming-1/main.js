const allUsers=[{
  firstName:"Tridib",
  gender:"Male",
  age:21
},{
  firstName:"Rohan",
  gender:"Male",
  age:22
},{
  firstName:"Seeta",
  gender:"Female",
  age:25
}]


let count=0;
for(let i=0;i<allUsers.length;i++){
  if(allUsers[i]["gender"]=='Male'){
    count+=1;
  }
}

console.log(`There are ${count} male`)
