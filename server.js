const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log("=== Data Baru Masuk ===");
  console.log(req.body);
  console.log("=======================\n");
  res.send("Data berhasil diterima server!");
});

app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});