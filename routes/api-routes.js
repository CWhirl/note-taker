const router = require('express').Router();
let data = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => res.json(data));


    router.post('/api/notes', (req, res) => {
        //generates an id for the created note
        let note = req.body;
        note.id = uuidv4();

        //assigns the id to the note and writes it to the json file
        data.push(note);
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(note);
    });

    router.delete('/api/notes/:id', (req, res) => {
        //uses the id from the query paramaters to target the proper note and removes the note from data
        data = data.filter(note => note.id !== req.params.id);

        //writes updated note information to the json file
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);
    });

module.exports = router;
