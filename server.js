const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Assuming your static files are in a directory called 'public'
const publicPath = path.join(__dirname, 'dist');

// Serve static files
app.use(express.static(publicPath));

// This would serve the index.html file for any unknown routes, useful for SPA (Single Page Applications)
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});