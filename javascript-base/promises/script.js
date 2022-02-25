/*
  can be resolved (ok) or rejected (bad)
*/

let p = new Promise((resolve, reject) => {
  let a = 1+1;

  if(a == 2){
    resolve('Success');
  }
  else{
    reject('Rejected');
  }
});

/* p.then() -> everything here will run after resolve
   p.catch() -> everything here will run after reject */

p.then((message) => console.log(`This is the then ${message}`))
 .catch((message) => console.log(`This is the catch ${message}`));