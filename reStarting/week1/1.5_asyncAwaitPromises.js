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

/*Promises**************************************************************************/

const fs = require("fs");

function fileReader(callBackFunc) {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        callBackFunc(data);
    })
}

function onDone(data) {
    console.log(data);
}

fileReader(onDone);
