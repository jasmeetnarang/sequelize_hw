const express = require("express")
const app = express();
const path = require("path")
const bodyParse = require("body-parser")
const { Campus } = require("./models")
const { Student } = require("./models")


app.use(express.static(path.join(__dirname, '..','client','public')));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded());

app.use("/api", require("./api"));

Campus.sync().then(() => console.log("campus table"))
Student.sync().then(() => console.log("student table"))

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});