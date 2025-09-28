const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;




const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'new.json')));

// 👉 Paginated API
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/news', (req, res) => {
    let limit = parseInt(req.query.limit) || 10;
    let offset = parseInt(req.query.offset) || 0;

    if (isNaN(limit) || limit < 0) {
        return res.status(400).json({ error: 'Limit must be a positive number' });
    }

    if (isNaN(offset) || offset < 0) {
        return res.status(400).json({ error: 'Offset must be a positive number' });
    }

    const slicedNews = data.news.slice(offset, offset + limit);
    res.json(slicedNews);
});


// Start server
app.listen(port, () => {
  console.log(`News feed app listening on port ${port}`);
});
