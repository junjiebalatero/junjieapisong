const express = require("express");
const app = express();
const importData = require('./priceLists.json');
let port = process.env.PORT || 3000;

//app.get("/", (req, res) => {
//    res.send("<h3>This app uses expressjs to fetch an API. Just add /songs in the address bar to view the json file</h3>");
//});

app.get("/", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log('Example app is listening on port http://localhost:$(port)');
});
