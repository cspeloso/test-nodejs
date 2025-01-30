const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

//  Enable CORS
app.use(cors());

// Middleware to parse json
app.use(express.json());

app.get('/', (req,res) => {
    res.json({ message: 'Welcome to my API!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
});