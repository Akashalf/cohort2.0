// const express = require("express");
// const app = express();
// const port = 3000;


// app.get("/", (req, res) => {
//     let kidneyId = req.query.kidneyId;
//     let userName = req.header.userName;
//     let pass = req.header.pass;

//     if (userName != "Akash" || pass != "pass") {
//         res.status(403).json({
//             msg: "Wrong Credentials"
//         });
//         return;
//     }

//     if (kidneyId != 1 || kidneyId != 2) {
//         req.status(411).json({
//             msg: "Wrong Input"
//         });
//         return;
//     }

//     if (userName === "Akash" && pass === "pass" && (kidneyId === 1 || kidneyId === 2)) {
//         res.status(403).json({
//             msg: "Wrong Credentials"
//         });
//         return;
//     }
// });

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}.`);
// });




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