const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Endpoint to create a username
app.post('/api/create-username', (req, res) => {
    const { username } = req.body;

    // Here you could add logic to save the username to a database

    res.json({ message: `Username "${username}" created successfully!` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});