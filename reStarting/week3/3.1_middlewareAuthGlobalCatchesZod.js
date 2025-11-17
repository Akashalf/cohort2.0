// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     let kidneyId = Number(req.query.kidneyId);
//     let userName = req.headers.username;
//     let pass = req.headers.pass;

//     if (userName !== "Akash" || pass !== "pass") {
//         return res.status(403).json({ msg: "Wrong Credentials" });
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         return res.status(411).json({ msg: "Wrong Input" });
//     }

//     return res.status(200).json({ msg: "Success" });
// });

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}.`);
// });


//some pre checks are needed to be checked for diffrent routes(.get, .put) but we don't want to repeat our code
//use the dry principle, that is why middlewares were introduced


/**Middlewares***************************************/
//req.query.kidneyId will be a string
const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
    let userName = req.headers.username;  //Express automatically lowercases all header keys
    let pass = req.headers.pass;

    if (userName != "Akash" || pass != "pass") {
        return res.status(403).json({msg: "Wrong credentials"});
    } else {
        next();
    }
}

function kidneyIdMiddleware(req, res, next) {
    let num = Number(req.query.kidneyId);

    if (num != 1 && num != 2) {
        return res.status(411).json({msg: "Wrong input"});
    } else {
        next();
    }
}

app.get("/", userMiddleware, kidneyIdMiddleware, (req, res) => {
    return res.status(200).json({msg: "Logged in!!"});
})

app.post("/", userMiddleware, kidneyIdMiddleware, (req, res) => {
    res.status(200).json({msg: "Post successful!!"});
})

app.listen(port, () => {
    console.log(`App is live on port ${port}`);
})