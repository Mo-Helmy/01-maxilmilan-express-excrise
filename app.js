const express = require("express");
const path = require("path");
const homePage = require("./routes/home");
const usersPage = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use(usersPage);
app.use(homePage);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});

app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
  console.log("server started at http://localhost:3000/users");
});
