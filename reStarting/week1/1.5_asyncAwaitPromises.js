//context switching: pani garam ho rha h, tabtak mai veggies cut kr rha hu
//but see you can only cut vegies or take out maggie from the packets (no context switching)

//cd .\reStarting\week1\ --> node .\1.5_asyncAwaitPromises.js --> else it will not read from a.txt
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log("Something went wrong", err);
//     } else {
//         console.log(data);
//     }
// })

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
//             callBack(data);
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

