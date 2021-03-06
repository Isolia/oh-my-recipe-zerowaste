const express = require('express');

const app = express();

const port = process.env.PORT || 5555;

const router = require('./router');
app.use(router);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`)); 
