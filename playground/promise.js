var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd('1',15).then((res) =>{
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('Hey, it worked!');
//     resolve();
//     reject('Unble to fulfill promise');
//   }, 2400)
// });
//
// somePromise.then((message) => {
//   console.log('Success', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// })
