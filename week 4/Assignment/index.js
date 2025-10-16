// ## Assignment #6 - You have to create a middleware for rate limiting a users request based on their username passed in the header
// ```
// You have been given an express server which has a few endpoints.

// Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second
// - If a user sends more than 5 requests in a single second, the server should block them with a 404.
// - User will be sending in their user id in the header as 'user-id'
// - You have been given a numberOfRequestsForUser object to start off with which clears every one second
// ```

// ## Assignments #1 - Create a cli
// [Assignment 1 Link](https://petal-estimate-4e9.notion.site/

// ## Assignment #1 - Trying to code a todo app and store data into the array

// ## Assignment #2 - Trying to code a filesystem based todo app and store data into the file

// ## Assignment #3 - Trying to code a filesystem based todo app with users

// ## Assignment #1 - Create a map functions that takes 2 inputs an array and a transformation callback/function and transform the array into a new one using transformation function

// ## Assignment #2 - Create a map functions that takes an array and a transform function as input and returns the transformed array as output



// important //

// ## Assignment #1 - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

// ## Assignment #2 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

// ## Assignment #3 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

// creating a Auth middleware for JWT verification

// ## Assignment #2 - Creating a TODO app

// Try to create a TODO application where

// 1. User can signup/signin
// 2. User can create/delete/update TODOs
// 3. User can see their existing todos and mark them as done

// ## Assignment #1 - Conditionally render the `logout` or the `signin`/ `signup` pages based on if the user is already logged in or not

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
