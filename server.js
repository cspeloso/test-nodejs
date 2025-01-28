const express = require('express');
const app = express();
const PORT = process.env.port || 80;

// Middleware to parse json
app.use(express.json());

app.get('/api', (req,res) => {
    res.json({ message: 'Welcome to my API!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
});