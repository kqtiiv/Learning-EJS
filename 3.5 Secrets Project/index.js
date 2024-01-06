
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ilovecoding";

app.use(bodyParser.urlencoded({extended: true}));

var userPassword;

app.post("/check", (req, res) => {
    userPassword = req.body["password"];
    if (userPassword === password) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, (req, res) => {
    console.log("Listening at port " + port);
});