//ECMAScript --> It is the rules or documentation that say's javascript should look like this.
//let say i want to build a compiler for js, i can should know specifications(can look from ECMAScript).

//Google --> V8 engine, Firefox --> Spidermonkey
//Javascript --> It is a language

//Some people took out V8 engine and added some backend things (readFile etc.) on top to create a 
// new Runtime environment(<--Imp) to compete with backend lang. such as Java.

//Bun --> Competetor of Node js does the same work as Node js but it's slightly better written in Zig(lang.)

//What can Node js do??
// Create clis (Command line interface), video player, games, HTTP Servers --> Written in JS, C++, Python, C

//HTTP Server --> Helps Frontend to interact with the Backend(Server)
//when some request is sent to server we send some more things with it such as -->
//route, autorization (cookie), Body, Method(Get, Put, Post) --> inspect --> Network (Header sec, Payload Sec)

//Methods --> GET, POST, PUT, DELETE

//200 everything okay
//404 page not found
//403 authentication issue
//500 Internal server error

//There are many Libraries that lets you create HTTP Servers --> most famous one Express.
//before writing the cod ein express 1. npm init -y 2. npm install express


//express, body-parser, query parameters (header --> ?msg=hello)
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log(req.body);        //not work without body-parser
    console.log(req.headers);
    res.send(`
        <html>
            <title>My page</title>
            <body>
                <h1>Long time no see!!</h1>
                <h2>Hey how are you!<h2>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});