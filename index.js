var express = require("express");
var app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("js", express.static(__dirname + "/public/"));
app.use("css", express.static(__dirname + "/public"));
const square = require("./square");

app.get("/", function (req, res) {
  res.render(`index`);
});

app.get("/area", function (req, res) {
  res.render(`area`)
});

app.get("/perimeter", function (req, res) {
  res.send(`the perimeter of the square with side length 5 is ${square.perimeter(5)}`);
});

app.listen(port, function () {
  console.log(`app is listening on ${port}!`);
});
