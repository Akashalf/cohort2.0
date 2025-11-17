const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let kidneyId = Number(req.query.kidneyId);
    let userName = req.headers.username;
    let pass = req.headers.pass;

    if (userName !== "Akash" || pass !== "pass") {
        return res.status(403).json({ msg: "Wrong Credentials" });
    }

    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(411).json({ msg: "Wrong Input" });
    }

    return res.status(200).json({ msg: "Success" });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});
