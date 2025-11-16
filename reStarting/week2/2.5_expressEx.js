//sum of n numbers

// const express = require("express");
// const app = express();
// const port = 3000;

// function sumOfNumbers(num) {
//     let ans = 0;
//     for (let i = 0; i <= num; i++) {
//         ans += i;
//     }
//     return ans;
// }

// app.get("/sum", (req, res) => {
//     const n = req.query.num;            //?num=5(?num=5&a=10&b=7)
//     const ans = sumOfNumbers(n);
//     res.send(ans.toString());
// });

// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// });

/**********Kedney Game***************************************************/

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());  //now it can parse the json sent in the body(post)

var users = [{
    firstName: "Akash",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }] 
}];

//getting the information 
app.get("/", (req, res) => {
    let akashKidney = users[0].kidneys;
    let numOfKidneys = akashKidney.length;
    let isHealthy = 0;

    for (let i = 0; i < numOfKidneys; i++) {
        if (akashKidney[i].healthy) {
            isHealthy++;
        }
    }

    const notHealthy = numOfKidneys - isHealthy;

    res.json({
        akashKidney,
        numOfKidneys,
        isHealthy,
        notHealthy,
    })
});

//to update (here to change from unhealthy to healthy)
app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Now all unHealthy kidneys are changed with Healthy kidneys!!"
    });
});

//adding healthy or unhealthy kidney(post --> to update)
app.post("/", (req, res) => {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Adding the kidney is done!"
    })
}); 

//remove all unHealthy Kidney
app.delete("/", (req, res) => {
    let newKidneys = [];
    let cntUnHealtyKidney = 0;

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            cntUnHealtyKidney++;
        }
    }

    if (cntUnHealtyKidney <= 0) {
        res.status(411).json({
            msg: "There are no unHealthy idneys to operate on!!"
        })
    }

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({
        msg: "Removed all unHealthy kidneys."
    })

});

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});