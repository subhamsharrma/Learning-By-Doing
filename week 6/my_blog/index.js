const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

// Set EJS as the template engine
app.set("view engine", "ejs");

const article1 = require("./articles/1.json");
const article2 = require("./articles/2.json");

// const articles = [article1, article2];

// // Home route
app.get("/", (req, res) => {
  res.render("home", { articles });
});

app.get("/about", (req, res) => {
  // Path to your JSON file
  const filee = path.join(__dirname, "articles", "1.json");

  // Read JSON file
  fs.readFile(filee, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading article");
    }

    const articlea = JSON.parse(data); // convert JSON string to object

    // Now render your about.ejs template
    res.render("about", { title: "Abouts ", articlea });
  });
});

const articles = [
  {
    id: 1,
    title: "Node.js Basics",
    content: "Node is a runtime...",
    date: "2025-10-07",
  },
  {
    id: 2,
    title: "Understanding EJS",
    content: "EJS helps render views...",
    date: "2025-10-07",
  },
  // more...
];

app.get("/home", (req, res) => {
  res.render("home", { articles }); // send articles array to template
});

app.get("/article/:id", (req, res) => {
  const article = articles.find((a) => a.id == req.params.id);
  if (!article) return res.status(404).send("Article not found");
  res.render("article", { article });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// updated