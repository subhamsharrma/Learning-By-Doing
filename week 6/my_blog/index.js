// // there is admin panel where admin can edit and del the artile for edit diffrent page
// // than authentication is required

// const express = require("express");
// const app = express();
// const port = 3000;
// const fs = require("fs");
// const path = require("path");
// app.use(express.static("public"));

// // Set EJS as the template engine
// app.set("view engine", "ejs");

// // const articles = [article1, article2];

// // // Home route
// app.get("/", (req, res) => {
//   res.render("home", { articles });
// });

// app.get("/about", (req, res) => {
//   // Path to your JSON file
//   const filee = path.join(__dirname, "articles", "1.json");

//   // Read JSON file
//   fs.readFile(filee, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error reading article");
//     }

//     const articlea = JSON.parse(data); // convert JSON string to object

//     // Now render your about.ejs template
//     res.render("about", { title: "Abouts ", articlea });
//   });
// });
// const articles = [
//   {
//     id: 1,
//     title: "The Art of Writing Clean Code",
//     content:
//       "Writing clean code is less about following rigid rules and more about creating clarity for others—and your future self. A well-written function tells a story: it declares purpose, avoids unnecessary cleverness, and remains open for extension yet closed for chaos. Clean code means choosing readability over shortcuts and using meaningful names, small functions, and clear logic. The best developers don’t just solve problems; they communicate intent through structure. When your teammate—or you six months later—can instantly grasp what the code does, that’s when you’ve truly written clean code.",
//     date: "2025-10-07",
//   },
//   {
//     id: 2,
//     title: "Understanding EJS in Node.js",
//     content:
//       "EJS (Embedded JavaScript) allows backend developers to dynamically generate HTML using variables and logic from Node.js. It’s like adding a layer of intelligence to your templates. With EJS, you can loop through arrays, render conditional content, and pass data directly from your Express routes into your views. It keeps your app lightweight by avoiding heavy frontend frameworks while still delivering interactive pages. The key idea is separation of concerns: your business logic stays in JavaScript, and your presentation stays in EJS templates—making code maintenance and collaboration far more efficient.",
//     date: "2025-10-07",
//   },
//   {
//     id: 3,
//     title: "The Power of Async Programming in JavaScript",
//     content:
//       "Asynchronous programming allows JavaScript to perform multiple operations without waiting for one task to finish before starting another. This non-blocking behavior is crucial for building fast, scalable applications. Callbacks were the original tool for handling async operations, but they quickly led to messy code. Promises improved readability, and `async/await` made asynchronous code feel synchronous. Together, they let developers write clean, logical workflows even when handling complex operations like API calls, database queries, or file reads. Understanding the event loop, microtasks, and promise chaining is key to mastering asynchronous thinking.",
//     date: "2025-10-07",
//   },
//   {
//     id: 4,
//     title: "Demystifying RESTful APIs",
//     content:
//       "A RESTful API follows a clear structure that lets clients interact with servers using predictable URLs and HTTP methods. Each endpoint represents a resource, and verbs like GET, POST, PUT, and DELETE describe the action. REST emphasizes statelessness, meaning each request carries all the information needed—no server memory required. This design ensures scalability and reliability. JSON is the most common data format because it’s lightweight and easy to parse. Once you understand REST principles, connecting backend services, mobile apps, and frontends becomes much simpler and highly maintainable.",
//     date: "2025-10-07",
//   },
//   {
//     id: 5,
//     title: "How CSS Brings Life to EJS Views",
//     content:
//       "CSS is not just decoration—it’s communication. When you serve HTML pages using EJS, CSS helps express your app’s personality. Fonts, colors, and layout directly affect user experience. Even backend developers benefit from learning CSS basics: flexbox, grid, margins, and responsive design. With a single stylesheet, you can make your EJS templates look polished without needing React or heavy frameworks. Using static middleware in Express, you serve CSS files from a public directory, letting browsers load styles instantly. Clean design turns your Node project into a visually engaging experience.",
//     date: "2025-10-07",
//   },
//   {
//     id: 6,
//     title: "Understanding Middleware in Express.js",
//     content:
//       "Middleware functions are the backbone of Express.js—they sit between a request and the final response. Think of them as traffic checkpoints that can inspect, modify, or stop requests before reaching your routes. Common examples include logging requests, parsing JSON, handling authentication, and serving static files. Each middleware receives `req`, `res`, and a `next()` callback to pass control to the next function. This chain-based architecture makes Express extremely modular. Understanding middleware helps you build cleaner, reusable code that’s easy to maintain across multiple routes and APIs.",
//     date: "2025-10-07",
//   },
//   {
//     id: 7,
//     title: "Why You Should Learn Git Early",
//     content:
//       "Git isn’t just version control—it’s a superpower for developers. It tracks every change, branch, and merge, allowing you to experiment fearlessly. By learning Git early, you understand collaboration, rollback, and history tracking—skills that save time and disasters. Imagine testing new ideas on a branch and merging only when stable. Platforms like GitHub and GitLab make sharing and reviewing code seamless. Commit messages become documentation, and pull requests foster teamwork. Whether working solo or in a team, Git keeps your code safe, traceable, and forever recoverable.",
//     date: "2025-10-07",
//   },
//   {
//     id: 8,
//     title: "Deploying Your Node App to the Cloud",
//     content:
//       "Deploying a Node.js app means taking your local project and making it accessible to the world. Cloud platforms like Render, Railway, or AWS handle the server setup, while you focus on writing good code. Understanding environment variables, ports, and process managers is essential. Deployment pipelines often include GitHub integration, automatic rebuilds, and environment-specific configurations. Once live, tools like PM2 help manage uptime, and monitoring services track performance. Deployment teaches you real-world engineering—connecting backend logic to production reliability with automation, versioning, and continuous delivery.",
//     date: "2025-10-07",
//   },
//   {
//     id: 9,
//     title: "Debugging Like a Pro in VS Code",
//     content:
//       "Debugging is less about fixing errors and more about understanding why your logic failed. VS Code provides tools like breakpoints, variable watchers, and call stacks to step through code in real time. Instead of sprinkling `console.log()` everywhere, use the built-in debugger to pause execution where things go wrong. Understanding scopes, closures, and event flow helps you locate bugs quickly. Great developers don’t fear bugs—they hunt them systematically. Once you master debugging, you write code with more confidence and spend less time guessing and more time building.",
//     date: "2025-10-07",
//   },
//   {
//     id: 10,
//     title: "Optimizing Node.js Performance",
//     content:
//       "Performance in Node.js often comes down to smart resource management. Since Node runs on a single thread, you must use asynchronous operations wisely to avoid blocking the event loop. Techniques like caching responses, compressing assets, and using clustering for multi-core CPUs drastically improve speed. Database optimization and minimizing middleware overhead also make a big difference. Profiling tools like `clinic.js` or Chrome DevTools can reveal bottlenecks. True performance optimization isn’t about premature tweaks—it’s about measuring, identifying slow points, and improving them systematically for real scalability.",
//     date: "2025-10-07",
//   },
//   {
//     id: 11,
//     title: "The Importance of Code Reviews",
//     content:
//       "Code reviews are more than just a quality check—they’re a learning opportunity. When peers review your code, they provide fresh perspectives that can catch bugs, improve readability, and enforce best practices. Reviewing others’ code sharpens your own skills, exposing you to different styles and solutions. A good review focuses on constructive feedback, balancing praise with suggestions for improvement. It fosters collaboration and shared ownership of the codebase. In the long run, regular code reviews lead to higher quality software and a stronger, more cohesive development team.",
//     date: "2025-10-07",
//   }
// ];

// app.get("/home", (req, res) => {
//   res.render("home", { articles }); // send articles array to template
// });


// app.get("/article/:id", (req, res) => {
//   const article = articles.find((a) => a.id == req.params.id);
//   if (!article) return res.status(404).send("Article not found");
//   res.render("article", { article });
// });
 
 
// // 3. Admin panel with edit & delete buttons
// app.get("/article/admin", (req, res) => {
//   res.render("admin", { articles });
// });

// // 4. Edit page
// app.get("/admin/edit/:id", (req, res) => {
//   const article = articles.find(a => a.id == req.params.id);
//   if (!article) return res.status(404).send("Article not found");
//   res.render("edit", { article });
// });

// // 5. Handle edit form submit
// app.post("/admin/edit/:id", (req, res) => {
//   const article = articles.find(a => a.id == req.params.id);
//   if (!article) return res.status(404).send("Article not found");

//   article.title = req.body.title;
//   article.content = req.body.content;

//   res.redirect("/article/admin"); // go back to admin panel
// });

// // 6. Delete route
// app.post("/admin/delete/:id", (req, res) => {
//   articles = articles.filter(a => a.id != req.params.id);
//   res.redirect("/article/admin");
// });

// app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
// // updated
