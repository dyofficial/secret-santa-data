const express = require("express");
const app = express();
const staffData = require("./expressPayStaff.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("expressPay staff");
});

app.get("/staff", (req, res) => {
  res.send(staffData);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
