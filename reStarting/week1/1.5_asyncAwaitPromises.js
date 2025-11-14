/**************Wraper func(callBack Hell)********************************************/
// const fs = require("fs");

// function onDone(data) {
//     console.log(data);
// }

// function myReader(callBack) {
//     fs.readFile("a.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log("Something Went wrong", err);
//         } else {
//             onDone(data);
//         }
//     });
// }

// myReader(onDone);

/**Function with Promises********************** */
//Promises are just the class that makes async func, callBacks more readable.

// const fs = require("fs");

// function myAsyncFunc() {
//     return new Promise(function (resole){
//         fs.readFile("a.txt", "utf-8", (err, data) => {
//             resolve(data);
//         });
//     });
// }

// function onDone() {
//     console.log(data);
// }

// //anything that will come from resolve will become arg of .then func(onDone)
// myAsyncFunc().then(onDone);

/***Practise 1 more Promise*****************/
//states --> pending, fulfilled, rejected

// const ans = new Promise(function(anyName) {
//     return anyName("foo");
// })

// function onDone(data) {
//     console.log(data);
// }

// ans.then(onDone);

/********  Async Await (no .then())  ****************/
//every await must be inside async func

function myPrinter() {
    let p = new Promise(function (res) {
        setTimeout(function () {
            res("Hey There!!");
        }, 2000);
    });
    return p;
}

async function main() {
    console.log(myPrinter());
    const res = await myPrinter();
    console.log(res);
}

main();





