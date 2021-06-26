const router = require('express').Router();
let noteData = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => res.json(noteData));

    router.post('/api/notes', (req, res) => {
        let note = req.body;
        let id = uuidv4();
        note.id = id;

        noteData.push(note);
        console.log(noteData);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
        res.json(note);
    });

    router.delete('/api/notes/:id', (req, res) => {
        let delId = req.params.id;
        let keepNotes = noteData.filter(note => note.id !== delId);
        noteData = keepNotes

        fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
        res.json(noteData);
    });

module.exports = router
