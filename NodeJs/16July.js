// const https = require('node:https');
// const fs = require('node:fs');
// setTimeout(()=>{
//     console.log("THIS ST3")
// },3000)


// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// var a =200;

// setTimeout(()=>{
//     console.log("THIS ST1")
// },0)

// console.log(a);
// setTimeout(()=>{
//     console.log("THIS IS ST2");
// })

// setImmediate(()=>{
//     console.log("THIS IS SETIMMEDIATE")
// })

// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK")
// })

// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API FETCHED")

// }).on('error', (e) => {
//   console.error(e);
// });

// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK2")
// })


// const fs = require('node:fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('./something.txt', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });


/////////////////////////////////////////////////





// const https = require('node:https');
// const fs = require('node:fs');
// setTimeout(()=>{
//     console.log("THIS ST3")
// },3000)


// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// setTimeout(()=>{
//     console.log("THIS ST1")
// },0)
// setImmediate(()=>{
//     console.log("THIS IS SETIMMEDIATE")
// })
// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK")
// })
// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API FETCHED");
//   setImmediate(()=>{
//     console.log("I AM HTTPS IMMEDIATE");
//   })
//   process.nextTick(()=>{
//     console.log("I AM HTTP NEXTTICK1")
//   })
// }).on('error', (e) => {
//   console.error(e);
// });
// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK2")
// })
// setTimeout(()=>{
//     console.log("THIS IS ST2");
// })


// timeout_vs_immediate.js

// setImmediate(() => {
//   console.log('immediate');
// });
// setTimeout(() => {
//   console.log('timeout');
// },0);

// process.nextTick(()=>{
//     console.log("NEXT TICK")
// })







//////////////////////////////////////////////////




// const https = require('node:https');
// const fs = require('node:fs');
// setTimeout(()=>{
//     console.log("THIS ST3")
// },30)


// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// setTimeout(()=>{
//     console.log("THIS ST1")
// },0)

// Promise.resolve("RESOLVE").then(console.log("PROMISe1"));
// setImmediate(()=>{
//     console.log("THIS IS SETIMMEDIATE")
// })
// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK")
// })
// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API FETCHED");
//   setImmediate(()=>{
//     console.log("I AM HTTPS IMMEDIATE");
//   })
//   process.nextTick(()=>{
//     console.log("I AM HTTP NEXTTICK1")
//   })
// Promise.resolve("RESOLVE").then(console.log("PROMISe INNNER"));

// }).on('error', (e) => {
//   console.error(e);
// });
// Promise.resolve("RESOLVE").then(console.log("PROMISe2"));

// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK2")
// })
// Promise.resolve("RESOLVE").then(console.log("PROMISe3"));

// setTimeout(()=>{
//     console.log("THIS IS ST2");
// })

///////////////////////////////////////////////


process.nextTick(()=>{
    console.log("NT1")
})

setImmediate(()=>{
    console.log("I AM HTTPS IMMEDIATE");
  })

Promise.resolve("RESOLVE").then(()=>{
    console.log("PROMISe1")
});