const express = require('express');
const app = express();
const { urlencoded } = require('body-parser');


app.use(express.json());
//app.use(urlencoded)

//Simply the index ('/') endpoint
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {`Failed to read the port ${PORT}`});