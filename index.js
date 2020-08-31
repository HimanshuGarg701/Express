const express = require('express');
const app = express();

//Simply the index ('/') endpoint
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {`Failed to read the port ${PORT}`});