import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    let dayType = "weekday";
    let message = "work hard";

    if (day == 6 || day == 0) {
        dayType = "weekend";
        message = "relax";
    } 
    res.render("index.ejs", {dayType: dayType, message: message});
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});