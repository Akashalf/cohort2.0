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




