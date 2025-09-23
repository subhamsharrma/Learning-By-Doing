const express = require('express')
const app = express()
const port = 3000

// Middleware to parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/add/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const sum = a + b;

    res.json({
        status: "success",
        message: "the sum of given two numbers",
        sum: sum
    });
});

app.post('/ala' , (req, res) => {
    const { a, b } = req.body;  // works with JSON now
    const sum = a + b;
    res.json({ sum });
});
app.post('/bala' , (req, res) => {
    const { a, b } = req.body;  // works with JSON now
    const sum = a + b;
    res.json({ sum });
});




app.get('/sub/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const difference = a - b;
  if(a <= 1000 ){
    return res.json({
      status: "error",
      message: "a should be greater than 1000"
    });
  }
  res.json({
    status: "success",  
    message: "the difference of given two numbers",
    difference: difference
  });
});

app.get('/multiply/:a/:b' , (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const product = a * b;

  res.json({
    status: "success",
    message: "the product of given two numbers",
    product: product
  });
});

app.get('/divide/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);   
  if (b === 0) {
    return res.json({
      status: "error",
      message: "Cannot divide by zero"
    });
  }
  const quotient = a / b;
  res.json({
    status: "success",
    message: "the division of given two numbers",
    quotient: quotient
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
