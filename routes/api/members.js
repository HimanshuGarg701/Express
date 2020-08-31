const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

//Returning the json object of all team members
router.get('/', (req, res) =>{
    res.json(members);
});

//Getting single memebr with respect to gievn id
router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(!found){
        return res.status(400).json({msg: 'Member not found'});
    }

    const findMember = members.filter(member => member.id === parseInt(req.params.id));
    res.json(findMember);
});

router.post('/', (req, res)=> {
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email
    };

    if(!req.body.email || !req.body.name){
        return res.status(400).json({msg : 'Please enter both name and email'});
    }

    members.push(newMember);
    res.json(members);
});

module.exports = router;