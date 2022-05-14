const path = require("path");
const express = require("express");
const fs = require("fs");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "build");
const publicUrl = process.env.PUBLIC_URL || `http://localhost:${port}`;
const indexHtml = path.join(publicPath, "index.html");

const app = express();
app.use(express.static(publicPath));

const indexHtmlContent = fs
  .readFileSync(indexHtml, "utf-8")
  .replace(/%PUBLIC_URL%/g, publicUrl);

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

app.get("*", (req, res) => {
  res.send(indexHtmlContent);
});
