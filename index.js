const express = require('express');
const app = express();
const members = require("./Members");
const { urlencoded } = require('body-parser');


app.use(express.json());
//app.use(urlencoded)

//Simply the index ('/') endpoint
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

//Returning the json object of all team members
app.get('/api/members', (req, res) =>{
    res.json(members);
});

//Getting single memebr with respect to gievn id
app.get('/api/members/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(!found){
        return res.status(400).json({msg: 'Member not found'});
    }

    const findMember = members.filter(member => member.id === parseInt(req.params.id));
    res.json(findMember);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {`Failed to read the port ${PORT}`});