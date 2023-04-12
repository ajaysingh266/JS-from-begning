// callbacks, callback hell, pyramid of doom
// aysnchrinous programming

// setTimeout(()=>{
//     HTMLHeadingElement.textContent = "Heading 1"
// },1000);

//promise //
const bucket = ['coffee', 'chips', 'vegetables','salt', 'rice']
// // create promise
const friedPromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried rice");
    }
    else {
        reject("rejected");
    }
})
// produce

// consume
// how to consume
friedPromise.then(
    // when promise resolved
    (myFriedRice) => {
    console.log("let celebrate", myFriedRice);
}
).catch(
    // when promise reject
(error) => 
{ console.log("error", error); }
)

// function retuning promise
// function ricePromise() {
//     const bucket = ['coffee', 'chips', 'vegetables', "salt",'rice']
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//             resolve("fried rice");
//         }
//         else {
//             reject("rejected");
//         }
//     })
// }
// ricePromise().then(
//         // when promise resolved
//         (myFriedRice) => {
//         console.log("let celebrate", myFriedRice);
//     }
//     ).catch(
//         // when promise reject
//     (error) => 
//     { console.log("error", error); }
//     )

// promise && setTimeout
// i want to resolve / reject promise after 2 seconds
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         const value = null;
//             setTimeout(()=>{
//                 if (value){
//                     resolve();
//                 }
//                 else{
//                     reject();
//                 }

//             }, 2000)
//     })
// }
// myPromise().then(()=>{console.log("resolved");})
// .catch(()=>{console.log("reject");})


// promise.resolve //
// promise.chainig //
// const myPromise =  Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })


//then()
// then method always return promise
// benefit of this return promise that we can crate the chain

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("foo");
//     })
// }
// myPromise().then(value => {
//     console.log(value);
//     value += "bar";
//     return value;                           // internally it returns a promise again
//     //return Promise.resolve(value);        // internally it works like this syntex
// })
//     .then((value) => {
//         console.log(value);
//         value += "baaz";
//         return value;
//     })
//     .then((value) => {
//         console.log(value);
//     })

console.log(this);




