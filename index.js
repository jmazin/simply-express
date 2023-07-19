const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

console.log('this port is', PORT)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});