const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

// Set EJS as the template engine
app.set("view engine", "ejs");

const article1 = require("./articles/1.json");
const article2 = require("./articles/2.json");

const articles = [article1, article2];

// // Home route
app.get("/", (req, res) => {
  res.render("home", { articles });
});

app.get("/about", (req, res) => {
  // Path to your JSON file
  const filePath = path.join(__dirname, "articles", "1.json");

  // Read JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading article");
    }

    const article = JSON.parse(data); // convert JSON string to object

    // Now render your about.ejs template
    res.render("about", { title: "About ", article });
  });
});

app.get("/home", (req, res) => {
  res.render("home", { articles }); // send articles array to template
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
