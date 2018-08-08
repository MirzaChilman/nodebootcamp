const express = require("express"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require("mongoose"),
  path = require("path"),
  cors = require("cors"),
  app = express();

/* ========================= */
/* START MAIN CONFIG */
/* ========================= */

mongoose.connect(
  "mongodb://bootcamp:bootcamp30@ds213472.mlab.com:13472/bootcamp",
  { useNewUrlParser: true }
);

console.log(path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cors());

/* start define route */
const articleRoutes = require("./routes/article.routes");
/* end define route */

/* start mounting route */
app.use("/article", articleRoutes);
/* end mounting route */
/* ========================= */
/* END MAIN CONFIG */
/* ========================= */

/* ========================= */
/* START CONFIG ROUTE */
/* ========================= */

app.get("/", (req, res) => {
  res.send("HALO INI HOME");
});

app.get("*", (req, res) => {
  res.send("404 Route Salah");
});
/* 404 Route */
/* 404 Route */

/* ========================= */
/* END CONFIG ROUTE */
/* ========================= */

/* LISTENING */
const port = process.env.PORT || 5000;
app.listen(port, process.env.IP, () => {
  console.log("Server Started on Port:", port);
});
