/*
1) Apps are stored as binary data on SSD, loaded into RAM when run, with compiled languages converted to machine code once during compilation, and interpreted languages converted every time during execution. 
2) Interpreted language:
    Code → Interpreter (line by line, every time) → Execute
   Compiled language:
    Code → Compiler (whole code to machine code at once) → Machine code → Execute
3) Static typed language:
    Variable type → Declared (before use) → Fixed type --> int num = 5; num = "hello"; --> error
   Loosely typed language:
    Variable type → Not declared → Changes dynamically --> let num = 5; num = "hello"; --> ok 
4) Single-threaded nature of JavaScript --> means it can only execute one task at a time. It processes commands one by one in a single sequence, so while one task is running, others must wait.
5) 
*/

/** Arrays ****************************************************************************************************/
// const usersName = ["akash Shukla", "hello", "hii"];
// console.log(typeof(usersName)); //onject


/**Objects ****************************************************************************************************/
// const users = {
//     firstName: "Akash",
//     secondName: "Shukla",
// }

// // array of objects
// const users1 = [{
//     firstName: "Akash",
//     gender: "male",
//     age: 90,
// }, {
//     firstName: "Raman",
//     gender: "male",
//     age: 18,
//     metadata: {
//         phNo: 2394834,
//         address: "",
//     }
// }];

// for (let i = 0; i < users1.length; i++) {
//     console.log(users1[i].firstName);
// }

// console.log(users1[0]["firstName"]);
// console.log(users1[1].metadata.phNo);


/**Call back Functions --> passing func. as an argument***********************************************************/
// function sum(num1, num2, callbackfun) {
//     let result = num1 + num2;
//     callbackfun(result);
// }

// function fun1(data) {
//     console.log("The answer is " + data);
// }

// function fun2(data) {
//     console.log(data + " Is the answer");
// }

// //callback function
// sum(10, 20, fun1);

/**setTimeout(func, time) **************************************************************************************/
//argumnet pass name of func. not call the func.

// function greet() {
//     console.log("Hello World");
// }
// setTimeout(greet, 3 * 1000); //greet function is ran after 3 sec(called only once)
// setInterval(greet, 2 * 1000); //in every 2 seconds greet func. is called


console.log(typeof undefined); // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
console.log(typeof null);// "object"  (2)
typeof alert // "function"  (3)


let num = ["akash", "vikash", "aaa", "az"];
let str = num.join("-");
console.log(str);  //akash-vikash-aaa-az
