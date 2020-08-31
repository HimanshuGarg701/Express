const express = require('express');
const app = express();
const members = require("./Members");

//Simply the index ('/') endpoint
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

//Returning the json object of all team members
app.get('/api/members', (req, res) =>{
    res.json(members);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {`Failed to read the port ${PORT}`});