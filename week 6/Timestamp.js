// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
// 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express');
const app = express();
const port = 3000;

let noOfReq = 0;

function middlewaree(req, res, next) {
  noOfReq++;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} | Total Requests: ${noOfReq}`);
  next();
}
let noOfReq2 = 0 ;

function middlewaree2(req , res , next) {
  noOfReq2++ ; 
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} | Total Requests: ${noOfReq}`);
  next();

}

app.use(middlewaree); // register the middleware globally

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sss' , (req , res) =>{
  res.send("hellofromss") ; 
})
app.get('/home', (req, res) => {
  res.send('Hello from Home!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

